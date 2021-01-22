const data = require("./data");

// 1.Find users who doesn't have any phone numbers.
console.log("\n 1.Find users who doesn't have any phone numbers");
const data1 = data.filter((item) => item.profile.phones.length === 0);
console.log(data1);

// 2. Find users who have articles.
console.log("\n 2. Find users who have articles");
const data2 = data.filter((item) => item['articles:'].length > 0);
console.log(data2);

// 3. Find users who have "annis" on their name.
const data3 = data.filter((item) => item.profile.full_name.match(/annis/gi));
console.log(data3);

// 4. Find users who have articles on year 2020.
console.log("\n 4. Find users who have articles on year 2020");
const data4 = data.filter((item) => {
  const articles = item["articles:"];
  const filtered = articles.filter(
    (article) => new Date(article.published_at).getFullYear() === 2020
  );
  return filtered.length > 0;
});
console.log(data4);

// 5. Find users who are born on 1986.
console.log("\n 5. Find users who are born on 1986");
const data5 = data.filter(
  (item) => new Date(item.profile.birthday).getFullYear() === 1986
);
console.log(data5);

// 6. Find articles that contain "tips" on the title
console.log('\n 6. Find articles that contain "tips" on the title');
const filtered_articles_by_title = [];
data.forEach((item) => {
  const articles = item["articles:"];
  articles.forEach((article) => {
    if (article.title.match(/tips/gi)) {
      filtered_articles_by_title.push(article);
    }
  });
});
console.log(filtered_articles_by_title);

// 7. Find articles published before August 2019.
console.log('\n 7. Find articles published before August 2019');
const filtered_articles_by_published = [];
data.forEach((item) => {
  const articles = item["articles:"];
  articles.forEach((article) => {
    const published_at = new Date(article.published_at);
    // mounth start at index 0 for january
    if (published_at.getMonth() < 7 && published_at.getFullYear() <= 2019) {
      filtered_articles_by_published.push(article);
    }
  });
});
console.log(filtered_articles_by_published);