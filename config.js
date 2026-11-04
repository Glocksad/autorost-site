/*
  Настройки статического сайта AUTOROST для GitHub Pages.
  leadApiUrl — полный адрес Cloudflare Worker, например:
  https://autorost-leads.<ваш-аккаунт>.workers.dev/api/lead
  Если оставить пустым, форма не имитирует отправку: заявка будет показана в консоли,
  а пользователь увидит предложение позвонить по телефону.
  siteUrl — канонический адрес опубликованного сайта, например:
  https://username.github.io/autorost/
*/
window.AUTOROST_CONFIG = { leadApiUrl: '', siteUrl: '' };
