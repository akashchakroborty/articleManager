const { When, Then, Before, Given } = require("cucumber");
const assert = require("assert");
const { Builder, By, until, Capabilities } = require("selenium-webdriver");

const chromeCapabilities = Capabilities.chrome();
const chromeOptions = { args: ["--test-type", "--incognito"] };
chromeCapabilities.set("chromeOptions", chromeOptions);

let articlePreviewList = [];

Before({ timeout: 60 * 1000 }, function (senario) {
  console.log(senario.pickle.name);
});

Given("we access home page", async function () {
  this.driver = new Builder()
    .forBrowser("chrome")
    .withCapabilities(chromeCapabilities)
    .build();

  await this.driver.get("http://localhost:3000");
});

Then("we should receive home page", async function () {
  const siteImage = await this.driver
    .wait(until.elementLocated(By.className("logo-image")), 10000)
    .isDisplayed();
  assert.equal(siteImage, true);
});

Then("we should see Article Preview List", async function () {
  articlePreviewList = await this.driver.findElements(
    By.className("article-preview-body")
  );
  console.log(
    "articlePreviewList count when landing in home page :",
    articlePreviewList.length
  );
  const isArticlePreviewListPresent = articlePreviewList.length >= 0;
  assert.equal(isArticlePreviewListPresent, true);
});

When("we click on Create Article", async function () {
  const createArticle = await this.driver.wait(
    until.elementLocated(By.className("create-article")),
    10000
  );
  createArticle.click();
});

Then("we should receive create article page", async function () {
  const formText = await this.driver
    .wait(until.elementLocated(By.tagName("h2")), 10000)
    .getText();
  assert.equal(formText, "Create Article");
});

Then("we should see create article form", async function () {
  const buttonText = await this.driver
    .wait(until.elementLocated(By.tagName("button")), 10000)
    .getText();
  assert.equal(buttonText, "CREATE ARTICLE");
});

When("we click on Edit Icon", async function () {
  const editArticle = await this.driver.wait(
    until.elementLocated(By.className("edit-article")),
    10000
  );
  editArticle.click();
});

Then("we should receive edit article page", async function () {
  const formText = await this.driver
    .wait(until.elementLocated(By.tagName("h2")), 10000)
    .getText();
  assert.equal(formText, "Edit Article");
});

Then("we should see edit article form", async function () {
  const buttonText = await this.driver
    .wait(until.elementLocated(By.tagName("button")), 10000)
    .getText();
  assert.equal(buttonText, "EDIT ARTICLE");
});

When("we click on article pannel body", async function () {
  const previewBody = await this.driver.wait(
    until.elementLocated(By.className("article-preview-body")),
    10000
  );
  previewBody.click();
});

When("we click on article image", async function () {
  const previewImage = await this.driver.wait(
    until.elementLocated(By.className("article-image")),
    10000
  );
  previewImage.click();
});

Then("we should receive read article page", async function () {
  const currentUrl = await this.driver.getCurrentUrl();
  const isReadArticlePage = currentUrl.includes("readArticle");
  assert.equal(isReadArticlePage, true);
});

Then("we should see the read article page", async function () {
  const readMoreText = await this.driver
    .wait(until.elementLocated(By.className("read-more")), 10000)
    .getText();
  assert.equal(readMoreText, "More from ReadIt");
});

When("we click on Delete Icon", async function () {
  const deleteArticle = await this.driver.wait(
    until.elementLocated(By.className("delete-article")),
    10000
  );
  deleteArticle.click();
});

Then("we should receive a delete confirmation screen", async function () {
  const dangerConfirmPopUp = await this.driver
    .wait(until.elementLocated(By.className("sweet-alert")), 10000)
    .isDisplayed();
  assert.equal(dangerConfirmPopUp, true);
});

When("we click on cancel delete", async function () {
  const cancelDeleteArticle = await this.driver.wait(
    until.elementLocated(By.className("btn-link")),
    10000
  );
  cancelDeleteArticle.click();
});

When("we click on yes delete article", async function () {
  articlePreviewList = await this.driver.findElements(
    By.className("article-preview-body")
  );
  console.log(
    "Article Count Before Delete Confirmation : ",
    articlePreviewList.length
  );
  const confirmDeleteArticle = await this.driver.wait(
    until.elementLocated(By.className("btn-danger")),
    10000
  );
  confirmDeleteArticle.click();
});

Then(
  "we should not see the delete confirmation screen anymore",
  async function () {
    const dangerConfirmPopUp = await this.driver.findElements(
      By.className("sweet-alert")
    );
    const isDangerConfirmPopUpEmpty = dangerConfirmPopUp.length === 0;
    assert.equal(isDangerConfirmPopUpEmpty, true);
  }
);

Then(
  "The article is deleted and article List count is reduced by 1",
  async function () {
    let newArticlePreviewList = await this.driver.findElements(
      By.className("article-preview-body")
    );
    console.log(
      "Article Count After Delete Confirmation : ",
      newArticlePreviewList.length
    );
    assert.equal(newArticlePreviewList.length, articlePreviewList.length);
  }
);

Then("All the form fields should be Empty", async function () {
  const input = await this.driver.findElements(By.tagName("input"));
  const textArea = await this.driver.findElements(By.tagName("textarea"));
  for (let item of input) {
    const value = await item.getAttribute("value");
    const isvalueEmpty = value.length === 0;
    assert(isvalueEmpty, true);
  }
  for (let item of textArea) {
    const value = await item.getText();
    const isvalueEmpty = value.length === 0;
    assert(isvalueEmpty, true);
  }
});

Then("All the form fields should be Filled", async function () {
  const editInput = await this.driver.findElements(By.tagName("input"));
  const editTextArea = await this.driver.findElements(By.tagName("textarea"));
  for (let editInputItem of editInput) {
    const value = await editInputItem.getAttribute("value");
    const isvalueEmpty = value.length > 0;
    assert(isvalueEmpty, true);
  }
  for (let editTextItem of editTextArea) {
    const value = await editTextItem.getText();
    const isvalueEmpty = value.length > 0;
    assert(isvalueEmpty, true);
  }
});
When("we Edit description field", async function () {
  const editTextArea = await this.driver.findElements(By.tagName("textarea"));
  editTextArea[0].clear();
  editTextArea[0].sendKeys("Edited test text........");
});

When("All form fields are not filled", async function () {
  const inputFileds = await this.driver.findElements(By.tagName("input"));
  const textArea = await this.driver.findElements(By.tagName("textarea"));
  for (let item of inputFileds) {
    item.sendKeys("Test text");
  }
  textArea[0].sendKeys("Test text");
});

When("All form fields are filled", async function () {
  const inputFileds = await this.driver.findElements(By.tagName("input"));
  const textArea = await this.driver.findElements(By.tagName("textarea"));
  for (let inputItems of inputFileds) {
    inputItems.sendKeys("Test text");
  }
  for (let testItems of textArea) {
    testItems.sendKeys("Test text");
  }
});

Then("We click on create article button", async function () {
  const createArticle = await this.driver.wait(
    until.elementLocated(By.tagName("button")),
    10000
  );
  createArticle.click();
});

Then("We click on Edit article button", async function () {
  const createArticle = await this.driver.wait(
    until.elementLocated(By.tagName("button")),
    10000
  );
  createArticle.click();
});

Then(
  "We remian in create article page, don't go back to Home page",
  async function () {
    const currentUrl = await this.driver.getCurrentUrl();
    const iscreateArticlePage = currentUrl.includes("createArticle");
    assert.equal(iscreateArticlePage, true);
  }
);

Then("We go back to Home page", async function () {
  const currentUrl = await this.driver.getCurrentUrl();
  console.log("current url", currentUrl);
  const homePageURL = "http://localhost:3000/";
  const isHomePage = currentUrl.includes(homePageURL);
  assert.equal(isHomePage, true);
});

Then("Article List count increased by 1", async function () {
  let previewListAfterCreate = await this.driver.findElements(
    By.className("article-preview-body")
  );

  console.log(
    "Article Count After Create Article : ",
    previewListAfterCreate.length
  );
  assert.equal(previewListAfterCreate.length, articlePreviewList.length);
});

When("We click on Back button", async function () {
  const backButton = await this.driver.wait(
    until.elementLocated(By.className("back-button")),
    10000
  );
  backButton.click();
});

Then("Article List count should be same", async function () {
  let newArticlePreviewListAfterEdit = await this.driver.findElements(
    By.className("article-preview-body")
  );
  console.log(
    "Article Count After Edit Article : ",
    newArticlePreviewListAfterEdit.length
  );
  assert.equal(
    newArticlePreviewListAfterEdit.length,
    articlePreviewList.length
  );
});

Then(
  "we should see different sections in read article page",
  async function () {
    let isArticleBodyDisplayed = await this.driver
      .wait(until.elementLocated(By.className("article-preview-body")), 10000)
      .isDisplayed();
    assert.equal(isArticleBodyDisplayed, true);
    let isArticleAuthorDisplayed = await this.driver
      .wait(until.elementLocated(By.className("article-avatar-author")), 10000)
      .isDisplayed();
    assert.equal(isArticleAuthorDisplayed, true);
    let isArticleImageDisplayed = await this.driver
      .wait(until.elementLocated(By.className("article-image")), 10000)
      .isDisplayed();
    assert.equal(isArticleImageDisplayed, true);
    let isArticleContentDisplayed = await this.driver
      .wait(until.elementLocated(By.className("article-content")), 10000)
      .isDisplayed();
    assert.equal(isArticleContentDisplayed, true);
    let isArticleBottomClapDisplayed = await this.driver
      .wait(until.elementLocated(By.id("bottomClap")), 10000)
      .isDisplayed();
    assert.equal(isArticleBottomClapDisplayed, true);
    let isArticleReadMoreDisplayed = await this.driver
      .wait(until.elementLocated(By.className("read-more-container")), 10000)
      .isDisplayed();
    assert.equal(isArticleReadMoreDisplayed, true);
  }
);

When("we scroll down the article page", async function () {
  await this.driver.executeScript(
    "return document.getElementById('article-read-image').scrollIntoView()"
  );
});

Then("we see the article SidePannel section", async function () {
  let isArticleSidePannnelDisplayed = await this.driver
    .wait(until.elementLocated(By.className("article-side-pannel")), 10000)
    .isDisplayed();
  assert.equal(isArticleSidePannnelDisplayed, true);
});

When("we scroll down till bottom claps", async function () {
  await this.driver.executeScript(
    "return document.getElementById('bottomClap').scrollIntoView()"
  );
});

Then("we see the article SidePannel section to be hidden", async function () {
  try {
    await this.driver
      .findElement(By.className("article-side-pannel"))
      .isDisplayed();
  } catch (err) {
    console.log("No Such element.");
  }
});

Then("we click on the clap icon, clap count incresed by 1", async function () {
  const clapIcon = await this.driver.wait(
    until.elementLocated(By.className("clap-icon")),
    10000
  );
  let clapCountBefore = await this.driver
    .wait(until.elementLocated(By.className("clap-count")), 10000)
    .getText();
  clapCountBefore = Number(clapCountBefore.split(" ")[0]);
  await clapIcon.click();
  let clapCountAfterClick = await this.driver
    .wait(until.elementLocated(By.className("clap-count")), 10000)
    .getText();
  clapCountAfterClick = Number(clapCountAfterClick.split(" ")[0]);
  assert.equal(clapCountAfterClick, ++clapCountBefore);
});

Then(
  "we see Read More section with 3 articles to choose from",
  async function () {
    const articleReadMoreList = await this.driver.findElements(
      By.className("article-preview")
    );
    assert.equal(articleReadMoreList.length, 3);
  }
);

When(
  "we click on read more article pannel body then same article should be rendered in article read page",
  async function () {
    let articleTitleList = await this.driver.findElements(
      By.className("article-preview-title")
    );
    const readMoreFirstArticleTitle = await articleTitleList[1].getText();

    await articleTitleList[1].click();

    const readArticleTitleText = await this.driver
      .wait(until.elementLocated(By.className("article-preview-title")), 10000)
      .getText();

    assert.equal(readMoreFirstArticleTitle, readArticleTitleText);
  }
);
