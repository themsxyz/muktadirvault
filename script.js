(function(){
  var _0 = {
    s: document.getElementById('searchSection'),
    c: document.getElementById('codeSection'),
    h: document.getElementById('homepageSection'),
    i: document.getElementById('searchInput'),
    b: document.getElementById('searchBtn'),
    p: document.getElementById('codeInput'),
    k: document.getElementById('codeBtn')
  };

  var _user = '@msvault';
  var _code = '198451';

  function _1(_2) {
    _0.s.classList.add('hidden');
    _0.c.classList.add('hidden');
    _0.h.classList.add('hidden');
    
    if(_2 === 's') {
      _0.s.classList.remove('hidden');
      _0.i.focus();
    } else if(_2 === 'c') {
      _0.c.classList.remove('hidden');
      _0.p.focus();
    } else if(_2 === 'h') {
      _0.h.classList.remove('hidden');
    }
  }

  function _3() {
    var _4 = _0.i.value.trim();
    if(_4 === _user) {
      _1('c');
      _0.i.value = '';
    } else {
      alert('⛔ invalid search term.\nHint: try @msvault');
    }
  }

  function _5() {
    var _6 = _0.p.value.trim();
    if(_6 === _code) {
      _1('h');
    } else {
      alert('❌ access denied — wrong code');
      _0.p.value = '';
      _0.p.focus();
    }
  }

  _0.i.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
      e.preventDefault();
      _3();
    }
  });

  _0.p.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
      e.preventDefault();
      _5();
    }
  });

  _0.b.addEventListener('click', _3);
  _0.k.addEventListener('click', _5);

  window.addEventListener('load', function() {
    _0.i.focus();
  });
})();
