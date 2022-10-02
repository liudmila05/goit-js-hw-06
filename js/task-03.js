const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const liEl = document.querySelector('.gallery');

const markup = images
  .map(image => `<li><img class="picture" src=${image.url} width = '400' alt = '${image.alt}'></img></li>`)
  .join('');

liEl.insertAdjacentHTML('beforeend', markup);

const pictures = document.querySelectorAll('.picture');

// styles
liEl.style.listStyle = 'none';
liEl.style.display = 'flex';
liEl.style.justifyContent = 'center';
liEl.style.gap = '30px';