Array.from(document.querySelectorAll('.item.product.product-item')).map(
  (el, i) => {
    const src = el.querySelector('.product-image-photo').src;
    return {
      id: i + 1,
      imgName: src.substr(src.lastIndexOf('/') + 1),
      price: el
        .querySelector('.price-wrapper .price')
        .innerHTML.replaceAll(',', '')
        .replaceAll('$', ''),
      name: el.querySelector('.product-item-link.filter-link').innerHTML,
      brand: '',
    };
  }
);
