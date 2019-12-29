import { HighlightJS } from './highlight.js-interface';

/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/interface-name-prefix */
/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * Adapted Highlight.js External APIs
 * Used to avoid importing all the languages
 */

// Require the highlight.js library without languages
const highlightJS = require('highlight.js/lib/highlight.js');
// Separately require languages
// highlightJS.registerLanguage('1c', require('highlight.js/lib/languages/1c'));
// highlightJS.registerLanguage('abnf', require('highlight.js/lib/languages/abnf'));
// highlightJS.registerLanguage('accesslog', require('highlight.js/lib/languages/accesslog'));
// highlightJS.registerLanguage('actionscript', require('highlight.js/lib/languages/actionscript'));
// highlightJS.registerLanguage('ada', require('highlight.js/lib/languages/ada'));
// highlightJS.registerLanguage('angelscript', require('highlight.js/lib/languages/angelscript'));
// highlightJS.registerLanguage('apache', require('highlight.js/lib/languages/apache'));
// highlightJS.registerLanguage('applescript', require('highlight.js/lib/languages/applescript'));
// highlightJS.registerLanguage('arcade', require('highlight.js/lib/languages/arcade'));
highlightJS.registerLanguage('cpp', require('highlight.js/lib/languages/cpp'));
// highlightJS.registerLanguage('arduino', require('highlight.js/lib/languages/arduino'));
// highlightJS.registerLanguage('armasm', require('highlight.js/lib/languages/armasm'));
highlightJS.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
// highlightJS.registerLanguage('asciidoc', require('highlight.js/lib/languages/asciidoc'));
// highlightJS.registerLanguage('aspectj', require('highlight.js/lib/languages/aspectj'));
// highlightJS.registerLanguage('autohotkey', require('highlight.js/lib/languages/autohotkey'));
// highlightJS.registerLanguage('autoit', require('highlight.js/lib/languages/autoit'));
// highlightJS.registerLanguage('avrasm', require('highlight.js/lib/languages/avrasm'));
highlightJS.registerLanguage('awk', require('highlight.js/lib/languages/awk'));
// highlightJS.registerLanguage('axapta', require('highlight.js/lib/languages/axapta'));
highlightJS.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
// highlightJS.registerLanguage('basic', require('highlight.js/lib/languages/basic'));
// highlightJS.registerLanguage('bnf', require('highlight.js/lib/languages/bnf'));
// highlightJS.registerLanguage('brainfuck', require('highlight.js/lib/languages/brainfuck'));
// highlightJS.registerLanguage('cal', require('highlight.js/lib/languages/cal'));
// highlightJS.registerLanguage('capnproto', require('highlight.js/lib/languages/capnproto'));
// highlightJS.registerLanguage('ceylon', require('highlight.js/lib/languages/ceylon'));
// highlightJS.registerLanguage('clean', require('highlight.js/lib/languages/clean'));
highlightJS.registerLanguage('clojure', require('highlight.js/lib/languages/clojure'));
highlightJS.registerLanguage('clojure-repl', require('highlight.js/lib/languages/clojure-repl'));
highlightJS.registerLanguage('cmake', require('highlight.js/lib/languages/cmake'));
highlightJS.registerLanguage('coffeescript', require('highlight.js/lib/languages/coffeescript'));
// highlightJS.registerLanguage('coq', require('highlight.js/lib/languages/coq'));
// highlightJS.registerLanguage('cos', require('highlight.js/lib/languages/cos'));
// highlightJS.registerLanguage('crmsh', require('highlight.js/lib/languages/crmsh'));
highlightJS.registerLanguage('crystal', require('highlight.js/lib/languages/crystal'));
highlightJS.registerLanguage('cs', require('highlight.js/lib/languages/cs'));
highlightJS.registerLanguage('csp', require('highlight.js/lib/languages/csp'));
highlightJS.registerLanguage('css', require('highlight.js/lib/languages/css'));
highlightJS.registerLanguage('d', require('highlight.js/lib/languages/d'));
highlightJS.registerLanguage('markdown', require('highlight.js/lib/languages/markdown'));
highlightJS.registerLanguage('dart', require('highlight.js/lib/languages/dart'));
// highlightJS.registerLanguage('delphi', require('highlight.js/lib/languages/delphi'));
highlightJS.registerLanguage('diff', require('highlight.js/lib/languages/diff'));
highlightJS.registerLanguage('django', require('highlight.js/lib/languages/django'));
// highlightJS.registerLanguage('dns', require('highlight.js/lib/languages/dns'));
highlightJS.registerLanguage('dockerfile', require('highlight.js/lib/languages/dockerfile'));
// highlightJS.registerLanguage('dos', require('highlight.js/lib/languages/dos'));
// highlightJS.registerLanguage('dsconfig', require('highlight.js/lib/languages/dsconfig'));
// highlightJS.registerLanguage('dts', require('highlight.js/lib/languages/dts'));
// highlightJS.registerLanguage('dust', require('highlight.js/lib/languages/dust'));
// highlightJS.registerLanguage('ebnf', require('highlight.js/lib/languages/ebnf'));
highlightJS.registerLanguage('elixir', require('highlight.js/lib/languages/elixir'));
highlightJS.registerLanguage('elm', require('highlight.js/lib/languages/elm'));
highlightJS.registerLanguage('ruby', require('highlight.js/lib/languages/ruby'));
highlightJS.registerLanguage('erb', require('highlight.js/lib/languages/erb'));
highlightJS.registerLanguage('erlang-repl', require('highlight.js/lib/languages/erlang-repl'));
highlightJS.registerLanguage('erlang', require('highlight.js/lib/languages/erlang'));
highlightJS.registerLanguage('excel', require('highlight.js/lib/languages/excel'));
// highlightJS.registerLanguage('fix', require('highlight.js/lib/languages/fix'));
// highlightJS.registerLanguage('flix', require('highlight.js/lib/languages/flix'));
// highlightJS.registerLanguage('fortran', require('highlight.js/lib/languages/fortran'));
highlightJS.registerLanguage('fsharp', require('highlight.js/lib/languages/fsharp'));
// highlightJS.registerLanguage('gams', require('highlight.js/lib/languages/gams'));
// highlightJS.registerLanguage('gauss', require('highlight.js/lib/languages/gauss'));
// highlightJS.registerLanguage('gcode', require('highlight.js/lib/languages/gcode'));
// highlightJS.registerLanguage('gherkin', require('highlight.js/lib/languages/gherkin'));
// highlightJS.registerLanguage('glsl', require('highlight.js/lib/languages/glsl'));
// highlightJS.registerLanguage('gml', require('highlight.js/lib/languages/gml'));
highlightJS.registerLanguage('go', require('highlight.js/lib/languages/go'));
// highlightJS.registerLanguage('golo', require('highlight.js/lib/languages/golo'));
highlightJS.registerLanguage('gradle', require('highlight.js/lib/languages/gradle'));
highlightJS.registerLanguage('groovy', require('highlight.js/lib/languages/groovy'));
// highlightJS.registerLanguage('haml', require('highlight.js/lib/languages/haml'));
highlightJS.registerLanguage('handlebars', require('highlight.js/lib/languages/handlebars'));
highlightJS.registerLanguage('haskell', require('highlight.js/lib/languages/haskell'));
// highlightJS.registerLanguage('haxe', require('highlight.js/lib/languages/haxe'));
// highlightJS.registerLanguage('hsp', require('highlight.js/lib/languages/hsp'));
highlightJS.registerLanguage('htmlbars', require('highlight.js/lib/languages/htmlbars'));
highlightJS.registerLanguage('http', require('highlight.js/lib/languages/http'));
// highlightJS.registerLanguage('hy', require('highlight.js/lib/languages/hy'));
// highlightJS.registerLanguage('inform7', require('highlight.js/lib/languages/inform7'));
highlightJS.registerLanguage('ini', require('highlight.js/lib/languages/ini'));
// highlightJS.registerLanguage('irpf90', require('highlight.js/lib/languages/irpf90'));
// highlightJS.registerLanguage('isbl', require('highlight.js/lib/languages/isbl'));
highlightJS.registerLanguage('java', require('highlight.js/lib/languages/java'));
highlightJS.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
// highlightJS.registerLanguage('jboss-cli', require('highlight.js/lib/languages/jboss-cli'));
highlightJS.registerLanguage('json', require('highlight.js/lib/languages/json'));
highlightJS.registerLanguage('julia', require('highlight.js/lib/languages/julia'));
highlightJS.registerLanguage('julia-repl', require('highlight.js/lib/languages/julia-repl'));
highlightJS.registerLanguage('kotlin', require('highlight.js/lib/languages/kotlin'));
// highlightJS.registerLanguage('lasso', require('highlight.js/lib/languages/lasso'));
// highlightJS.registerLanguage('ldif', require('highlight.js/lib/languages/ldif'));
// highlightJS.registerLanguage('leaf', require('highlight.js/lib/languages/leaf'));
highlightJS.registerLanguage('less', require('highlight.js/lib/languages/less'));
highlightJS.registerLanguage('lisp', require('highlight.js/lib/languages/lisp'));
// highlightJS.registerLanguage('livecodeserver', require('highlight.js/lib/languages/livecodeserver'));
// highlightJS.registerLanguage('livescript', require('highlight.js/lib/languages/livescript'));
highlightJS.registerLanguage('llvm', require('highlight.js/lib/languages/llvm'));
// highlightJS.registerLanguage('lsl', require('highlight.js/lib/languages/lsl'));
highlightJS.registerLanguage('lua', require('highlight.js/lib/languages/lua'));
highlightJS.registerLanguage('makefile', require('highlight.js/lib/languages/makefile'));
highlightJS.registerLanguage('mathematica', require('highlight.js/lib/languages/mathematica'));
highlightJS.registerLanguage('matlab', require('highlight.js/lib/languages/matlab'));
// highlightJS.registerLanguage('maxima', require('highlight.js/lib/languages/maxima'));
// highlightJS.registerLanguage('mel', require('highlight.js/lib/languages/mel'));
// highlightJS.registerLanguage('mercury', require('highlight.js/lib/languages/mercury'));
// highlightJS.registerLanguage('mipsasm', require('highlight.js/lib/languages/mipsasm'));
// highlightJS.registerLanguage('mizar', require('highlight.js/lib/languages/mizar'));
highlightJS.registerLanguage('perl', require('highlight.js/lib/languages/perl'));
// highlightJS.registerLanguage('mojolicious', require('highlight.js/lib/languages/mojolicious'));
// highlightJS.registerLanguage('monkey', require('highlight.js/lib/languages/monkey'));
// highlightJS.registerLanguage('moonscript', require('highlight.js/lib/languages/moonscript'));
// highlightJS.registerLanguage('n1ql', require('highlight.js/lib/languages/n1ql'));
highlightJS.registerLanguage('nginx', require('highlight.js/lib/languages/nginx'));
// highlightJS.registerLanguage('nimrod', require('highlight.js/lib/languages/nimrod'));
highlightJS.registerLanguage('nix', require('highlight.js/lib/languages/nix'));
// highlightJS.registerLanguage('nsis', require('highlight.js/lib/languages/nsis'));
highlightJS.registerLanguage('objectivec', require('highlight.js/lib/languages/objectivec'));
highlightJS.registerLanguage('ocaml', require('highlight.js/lib/languages/ocaml'));
// highlightJS.registerLanguage('openscad', require('highlight.js/lib/languages/openscad'));
// highlightJS.registerLanguage('oxygene', require('highlight.js/lib/languages/oxygene'));
// highlightJS.registerLanguage('parser3', require('highlight.js/lib/languages/parser3'));
// highlightJS.registerLanguage('pf', require('highlight.js/lib/languages/pf'));
highlightJS.registerLanguage('pgsql', require('highlight.js/lib/languages/pgsql'));
highlightJS.registerLanguage('php', require('highlight.js/lib/languages/php'));
highlightJS.registerLanguage('plaintext', require('highlight.js/lib/languages/plaintext'));
// highlightJS.registerLanguage('pony', require('highlight.js/lib/languages/pony'));
highlightJS.registerLanguage('powershell', require('highlight.js/lib/languages/powershell'));
// highlightJS.registerLanguage('processing', require('highlight.js/lib/languages/processing'));
// highlightJS.registerLanguage('profile', require('highlight.js/lib/languages/profile'));
// highlightJS.registerLanguage('prolog', require('highlight.js/lib/languages/prolog'));
highlightJS.registerLanguage('properties', require('highlight.js/lib/languages/properties'));
highlightJS.registerLanguage('protobuf', require('highlight.js/lib/languages/protobuf'));
highlightJS.registerLanguage('puppet', require('highlight.js/lib/languages/puppet'));
// highlightJS.registerLanguage('purebasic', require('highlight.js/lib/languages/purebasic'));
highlightJS.registerLanguage('python', require('highlight.js/lib/languages/python'));
// highlightJS.registerLanguage('q', require('highlight.js/lib/languages/q'));
// highlightJS.registerLanguage('qml', require('highlight.js/lib/languages/qml'));
highlightJS.registerLanguage('r', require('highlight.js/lib/languages/r'));
highlightJS.registerLanguage('reasonml', require('highlight.js/lib/languages/reasonml'));
// highlightJS.registerLanguage('rib', require('highlight.js/lib/languages/rib'));
// highlightJS.registerLanguage('roboconf', require('highlight.js/lib/languages/roboconf'));
// highlightJS.registerLanguage('routeros', require('highlight.js/lib/languages/routeros'));
// highlightJS.registerLanguage('rsl', require('highlight.js/lib/languages/rsl'));
// highlightJS.registerLanguage('ruleslanguage', require('highlight.js/lib/languages/ruleslanguage'));
highlightJS.registerLanguage('rust', require('highlight.js/lib/languages/rust'));
// highlightJS.registerLanguage('sas', require('highlight.js/lib/languages/sas'));
highlightJS.registerLanguage('scala', require('highlight.js/lib/languages/scala'));
highlightJS.registerLanguage('scheme', require('highlight.js/lib/languages/scheme'));
// highlightJS.registerLanguage('scilab', require('highlight.js/lib/languages/scilab'));
highlightJS.registerLanguage('scss', require('highlight.js/lib/languages/scss'));
highlightJS.registerLanguage('shell', require('highlight.js/lib/languages/shell'));
// highlightJS.registerLanguage('smali', require('highlight.js/lib/languages/smali'));
// highlightJS.registerLanguage('smalltalk', require('highlight.js/lib/languages/smalltalk'));
// highlightJS.registerLanguage('sml', require('highlight.js/lib/languages/sml'));
// highlightJS.registerLanguage('sqf', require('highlight.js/lib/languages/sqf'));
highlightJS.registerLanguage('sql', require('highlight.js/lib/languages/sql'));
// highlightJS.registerLanguage('stan', require('highlight.js/lib/languages/stan'));
// highlightJS.registerLanguage('stata', require('highlight.js/lib/languages/stata'));
// highlightJS.registerLanguage('step21', require('highlight.js/lib/languages/step21'));
highlightJS.registerLanguage('stylus', require('highlight.js/lib/languages/stylus'));
// highlightJS.registerLanguage('subunit', require('highlight.js/lib/languages/subunit'));
highlightJS.registerLanguage('swift', require('highlight.js/lib/languages/swift'));
// highlightJS.registerLanguage('taggerscript', require('highlight.js/lib/languages/taggerscript'));
highlightJS.registerLanguage('yaml', require('highlight.js/lib/languages/yaml'));
// highlightJS.registerLanguage('tap', require('highlight.js/lib/languages/tap'));
// highlightJS.registerLanguage('tcl', require('highlight.js/lib/languages/tcl'));
highlightJS.registerLanguage('tex', require('highlight.js/lib/languages/tex'));
// highlightJS.registerLanguage('thrift', require('highlight.js/lib/languages/thrift'));
// highlightJS.registerLanguage('tp', require('highlight.js/lib/languages/tp'));
// highlightJS.registerLanguage('twig', require('highlight.js/lib/languages/twig'));
highlightJS.registerLanguage('typescript', require('highlight.js/lib/languages/typescript'));
// highlightJS.registerLanguage('vala', require('highlight.js/lib/languages/vala'));
// highlightJS.registerLanguage('vbnet', require('highlight.js/lib/languages/vbnet'));
// highlightJS.registerLanguage('vbscript', require('highlight.js/lib/languages/vbscript'));
// highlightJS.registerLanguage('vbscript-html', require('highlight.js/lib/languages/vbscript-html'));
// highlightJS.registerLanguage('verilog', require('highlight.js/lib/languages/verilog'));
// highlightJS.registerLanguage('vhdl', require('highlight.js/lib/languages/vhdl'));
highlightJS.registerLanguage('vim', require('highlight.js/lib/languages/vim'));
// highlightJS.registerLanguage('x86asm', require('highlight.js/lib/languages/x86asm'));
// highlightJS.registerLanguage('xl', require('highlight.js/lib/languages/xl'));
// highlightJS.registerLanguage('xquery', require('highlight.js/lib/languages/xquery'));
// highlightJS.registerLanguage('zephir', require('highlight.js/lib/languages/zephir'));

export const hljs: HighlightJS = highlightJS as HighlightJS;
