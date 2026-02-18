 (function(){
     
      var _0 = {
        // section ids (hex)
        s: document.getElementById('\x73\x65\x61\x72\x63\x68\x53\x65\x63\x74\x69\x6f\x6e'), 
        c: document.getElementById('\x63\x6f\x64\x65\x53\x65\x63\x74\x69\x6f\x6e'),         
        h: document.getElementById('\x68\x6f\x6d\x65\x70\x61\x67\x65\x53\x65\x63\x74\x69\x6f\x6e'), 
        // input/button ids
        i: document.getElementById('\x73\x65\x61\x72\x63\x68\x49\x6e\x70\x75\x74'),         
        b: document.getElementById('\x73\x65\x61\x72\x63\x68\x42\x74\x6e'),                 
        p: document.getElementById('\x63\x6f\x64\x65\x49\x6e\x70\x75\x74'),                 
        k: document.getElementById('\x63\x6f\x64\x65\x42\x74\x6e')                          
      };

      // ---- hidden credentials (hex) ----
      var _user = '\x40\x6d\x73\x76\x61\x75\x6c\x74';   
      var _code = '\x31\x39\x38\x34\x35\x31';           

      // ---- function to hide/show sections (short names) ----
      function _1(_2) {  
        _0.s.classList.add('\x68\x69\x64\x64\x65\x6e'); 
        _0.c.classList.add('\x68\x69\x64\x64\x65\x6e');
        _0.h.classList.add('\x68\x69\x64\x64\x65\x6e');
        // show requested
        if(_2 === '\x73') { // 's'
          _0.s.classList.remove('\x68\x69\x64\x64\x65\x6e');
          _0.i.focus();
        } else if(_2 === '\x63') { // 'c'
          _0.c.classList.remove('\x68\x69\x64\x64\x65\x6e');
          _0.p.focus();
        } else if(_2 === '\x68') { // 'h'
          _0.h.classList.remove('\x68\x69\x64\x64\x65\x6e');
        }
      }

      // ---- event handler for search (obfuscated) ----
      function _3() {
        var _4 = _0.i.value.trim();
        // compare with hex-encoded user string
        if(_4 === _user) {
          _1('\x63'); // show code section
          _0.i.value = ''; // clear
        } else {
          // alert messages also hex-encoded to hide hints
          alert('\u26d4\x20\x69\x6e\x76\x61\x6c\x69\x64\x20\x73\x65\x61\x72\x63\x68\x20\x74\x65\x72\x6d\x2e\x0a\x48\x69\x6e\x74\x3a\x20\x74\x72\x79\x20\x40\x6d\x73\x76\x61\x75\x6c\x74'); 
          
        }
      }

      // ---- event handler for code ----
      function _5() {
        var _6 = _0.p.value.trim();
        if(_6 === _code) {
          _1('\x68'); // show homepage
        } else {
          alert('\u274c\x20\x61\x63\x63\x65\x73\x73\x20\x64\x65\x6e\x69\x65\x64\x20\u2014\x20\x77\x72\x6f\x6e\x67\x20\x63\x6f\x64\x65');
          // "❌ access denied — wrong code"
          _0.p.value = '';
          _0.p.focus();
        }
      }

      // ---- attach listeners (enter keys + buttons) ----
      _0.i.addEventListener('\x6b\x65\x79\x70\x72\x65\x73\x73', function(e) { // "keypress"
        if(e.key === '\x45\x6e\x74\x65\x72') { // "Enter"
          e.preventDefault();
          _3();
        }
      });

      _0.p.addEventListener('\x6b\x65\x79\x70\x72\x65\x73\x73', function(e) {
        if(e.key === '\x45\x6e\x74\x65\x72') {
          e.preventDefault();
          _5();
        }
      });

      _0.b.addEventListener('\x63\x6c\x69\x63\x6b', _3);   // "click"
      _0.k.addEventListener('\x63\x6c\x69\x63\x6b', _5);

      // ---- start with search focused ----
      window.addEventListener('\x6c\x6f\x61\x64', function() {
        _0.i.focus();
      });

      // ---- additional junk to confuse (dead code) ----
      var _7 = function(_8){ return _8.split('').reverse().join(''); };
      var _9 = _7('\x74\x6c\x75\x61\x76\x73\x6d\x40'); 
      // end
    })();
 
