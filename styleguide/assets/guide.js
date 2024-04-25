Gn.ready(function () {
  const theme = Gn.util.$('#ThemeSelector');
  const themeFile = Gn.util.$('#ThemeFile');

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const changeTheme = function (theme) {
    const stylepath = Gn.util.attr(themeFile, 'href');
    const stylefile = stylepath.match(/[-_\w]+[.][\w]+$/i)[0];
    Gn.util.attr(themeFile, 'href', stylepath.replace(stylefile, theme + '.css'));
    const categorys = Gn.util.$$('.aigis-sidemenu a[href]');
    Gn.util.each(categorys, function (x) {
      const link = x.getAttribute('href').split('#')[0];
      x.setAttribute('href', link + '#' + theme);
    });
    Gn.util.attr(Gn.util.$('.main-link'), 'href', Gn.util.attr(Gn.util.$('.main-link'), 'href').split('#')[0] + '#' + theme);
    Gn.util.attr(Gn.util.$('.util-link'), 'href', Gn.util.attr(Gn.util.$('.util-link'), 'href').split('#')[0] + '#' + theme);
  };

  Gn.util.on(theme, 'change', function () {
    location.hash = this.value;
  });

  Gn.util.on(window, 'hashchange', function () {
    changeTheme(location.hash.substring(1));
  });

  if (location.hash) {
    changeTheme(location.hash.substring(1));
    Gn.util.val(theme, location.hash.substring(1));
  }

  Gn.util.on(Gn.util.$$('a[href]'), 'click', function (e) {
    if (Gn.util.startsWith(e.currentTarget.getAttribute('href'), '#')) {
      e.preventDefault();
    }
  });

  const comppath = location.pathname.replace('/index.html', '').split('/').pop().replace('(js)', '');
  if (components && components[comppath]) {
    setTimeout(function () {
      components[comppath]();
      Gn.util.on('.js-guide', 'click', function () {
        Gn.util.scrollTop(window, Gn.util.offset(Gn.util.prev(Gn.util.parent(Gn.util.$('.language-ejs')))).top - 100);
      });
    }, 300);
  }
});
