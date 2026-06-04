// 監聽事件；當指定事件發生時執行後方函式。
document.addEventListener('DOMContentLoaded', function () {
// 宣告變數，保存 DOM 元素、狀態或資料。
  var menuButton = document.querySelector('.site-header-toggle');
// 宣告變數，保存 DOM 元素、狀態或資料。
  var siteMenu = document.querySelector('.site-menu');
// 空白行，用來分隔不同邏輯段落。

// 條件判斷，只有符合條件時才執行內部程式。
  if (menuButton && siteMenu) {
// 設定 HTML 屬性，常用於無障礙或互動狀態。
    menuButton.setAttribute('aria-label', '切換網站選單');
// 設定 HTML 屬性，常用於無障礙或互動狀態。
    menuButton.setAttribute('aria-expanded', 'false');
// 監聽事件；當指定事件發生時執行後方函式。
    menuButton.addEventListener('click', function (event) {
// 取消連結或按鈕的預設行為，改由 JavaScript 控制互動。
      event.preventDefault();
// 宣告變數，保存 DOM 元素、狀態或資料。
      var isOpen = siteMenu.classList.toggle('is-open');
// 設定 HTML 屬性，常用於無障礙或互動狀態。
      menuButton.setAttribute('aria-expanded', String(isOpen));
// 結束前面開啟的函式、條件或事件區塊。
    });
// 結束前面開啟的函式、條件或事件區塊。
  }
// 空白行，用來分隔不同邏輯段落。

// 宣告變數，保存 DOM 元素、狀態或資料。
  var revealItems = document.querySelectorAll('.card, .widget, .content, .sidebar');
// 逐一處理一組元素或資料。
  revealItems.forEach(function (item) {
// 新增 CSS class，讓元素套用指定樣式或動畫狀態。
    item.classList.add('js-reveal');
// 結束前面開啟的函式、條件或事件區塊。
  });
// 空白行，用來分隔不同邏輯段落。

// 條件判斷，只有符合條件時才執行內部程式。
  if ('IntersectionObserver' in window) {
// 宣告變數，保存 DOM 元素、狀態或資料。
    var observer = new IntersectionObserver(function (entries) {
// 逐一處理一組元素或資料。
      entries.forEach(function (entry) {
// 條件判斷，只有符合條件時才執行內部程式。
        if (entry.isIntersecting) {
// 新增 CSS class，讓元素套用指定樣式或動畫狀態。
          entry.target.classList.add('is-visible');
// 這行負責頁面互動邏輯，請觀察它如何連結 HTML 結構與 CSS 效果。
          observer.unobserve(entry.target);
// 結束前面開啟的函式、條件或事件區塊。
        }
// 結束前面開啟的函式、條件或事件區塊。
      });
// 這行負責頁面互動邏輯，請觀察它如何連結 HTML 結構與 CSS 效果。
    }, { threshold: 0.12 });
// 空白行，用來分隔不同邏輯段落。

// 逐一處理一組元素或資料。
    revealItems.forEach(function (item) {
// 這行負責頁面互動邏輯，請觀察它如何連結 HTML 結構與 CSS 效果。
      observer.observe(item);
// 結束前面開啟的函式、條件或事件區塊。
    });
// 這行負責頁面互動邏輯，請觀察它如何連結 HTML 結構與 CSS 效果。
  } else {
// 逐一處理一組元素或資料。
    revealItems.forEach(function (item) {
// 新增 CSS class，讓元素套用指定樣式或動畫狀態。
      item.classList.add('is-visible');
// 結束前面開啟的函式、條件或事件區塊。
    });
// 結束前面開啟的函式、條件或事件區塊。
  }
// 結束前面開啟的函式、條件或事件區塊。
});
// 空白行，用來分隔不同邏輯段落。
