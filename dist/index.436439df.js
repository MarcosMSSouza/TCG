// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"drOo7":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "6632b38b436439df";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jKMjS":[function(require,module,exports) {
var _cardsJs = require("./cards.js"); ///////////////
// import { teste } from "./controler.js";
// console.log(creatures);
let draggables = document.querySelectorAll('.cards');
const dragareas = document.querySelectorAll('.dragarea');
const modal_play = document.getElementById('modal-play');
const btn_play = document.getElementById('btn-play');
const modal_collection = document.querySelector('.modal-collection');
const btn_collection = document.getElementById('btn-collection');
const deck1 = document.getElementById('deck1');
const builder = document.querySelector('.modal-collection-builder');
const gameArea = document.querySelector('.gameArea');
const hand = document.querySelector('.player1Hand');
const deck = document.querySelector('.drawdeck');
const modal_content = document.querySelector('.modal-collection-content');
deck1.addEventListener('click', ()=>{
    console.log('click');
    builder.classList.toggle('hidden');
});
btn_collection.addEventListener('click', function() {
    modal_collection.classList.toggle('hidden');
});
btn_play.addEventListener('click', function() {
    modal_play.classList.toggle('hidden');
});
const board = {
    boardPlayer1: []
};
const player1 = {
    hand: []
};
/////////////// drawFromDeck////////////////////////
// function drawfromDeck(number) {
//   let random = generateRandomNumbers(number);
//   const cardsArray = Array.from(hand.querySelectorAll(".cards"));
//   console.log(cardsArray);
//   player1.hand.push(creatures[random]);
//   for (let i = 0; i <= player1.hand.length; i++) {
//     if (
//       i < player1.hand.length &&
//       cardsArray[i] &&
//       !cardsArray[i].hasChildNodes()
//     ) {
//       cardsArray[i].insertAdjacentHTML(
//         "afterBegin",
//         ` <img src="${player1.hand[i].url}" alt="" />`
//       );
//     }
//   }
// }
//teste
function drawfromDeck(number) {
    let random = generateRandomNumbers(number);
    // const cardsArray = Array.from(hand.querySelectorAll(".cards"));
    // console.log(cardsArray);
    // player1.hand.push(creatures[random]);
    // console.log(player1.hand[0]);
    // for (let i = 0; i <= player1.hand.length; i++) {
    //   // console.log(player1.hand);
    //   if (
    // const cardtest = document.createElement("div");
    // console.log(cardtest);
    // let cardTest = document.createElement("div");
    // cardTest.innerHTML = `<div class="cards" draggable="true"><img src="${creatures[random].url}" alt="" /></div>`;
    // let cardtoBe = `<img class=" cards" draggable="true" src="${player1.hand[0].url}" alt="" />`;
    // cardtest.innerHTML = cardtoBe;
    // console.log(cardTest);
    // hand.appendChild(cardTest);
    hand.insertAdjacentHTML('afterbegin', ` <div class="cards" draggable="true"><img src="${_cardsJs.creatures[random].url}" alt="" /></div>`);
    // hand.appendChild(cardTest);
    draggables = document.querySelectorAll('.cards');
    // console.log(draggables);
    function makeDraggable() {
        draggables.forEach((draggable)=>{
            // console.log(this);
            draggable.addEventListener('dragstart', ()=>{
                draggable.classList.add('dragging');
            });
            draggable.addEventListener('dragend', ()=>{
                draggable.classList.remove('dragging');
            });
        });
    }
    makeDraggable();
//   );
// }
}
//////////
function generateRandomNumbers(number) {
    let randomNumber = number;
    const randomArray = [];
    while(randomArray.length < randomNumber){
        const randomNumber1 = Math.floor(Math.random() * 7 + 1);
        if (!randomArray.includes(randomNumber1)) randomArray.push(randomNumber1);
    }
    return randomArray;
}
deck.addEventListener('click', ()=>drawfromDeck(1)
);
//////////////// Draggin events /////////////////
// const dragarea = document.querySelectorAll(".dragarea");
// document.addEventListener("dragstart", (e) => {
//   // e.preventDefault();
//   e.target.classList.add("dragging");
//   e.dataTransfer.setData("text/plain", e.target.id);
// });
// document.addEventListener("dragend", (e) => {
//   e.target.classList.remove("dragging");
// });
// dragarea.forEach((item) => {
//   item.addEventListener("dragover", (e) => {
//     const dragging = document.querySelector(".dragging");
//     const dropTarget = e.target;
//     const box = dropTarget.getBoundingClientRect();
//     if (e.clientX < box.x + box.width / 2) {
//       dropTarget.parentElement.insertBefore(dragging, dropTarget);
//       // const applyAfter = getNewPosition(item, e.clientY);
//     } else if (
//       e.target.classList.contains("dragarea") &&
//       !e.target.classList.contains("dragging")
//     ) {
//       console.log(e.target);
//       // dropTarget.parentElement.prependChild(dragging);
//       dropTarget.insertAfter(dragging, dragging.closest("draggable"));
//     }
//     // console.log(e.clientX, box);
//     else {
//       dropTarget.parentElement.insertBefore(dragging, dropTarget.nextSibling);
//     }
//   });
// });
//// DRAG 2 TESTE // ok
// draggables.forEach((draggable) => {
//   // console.log(this);
//   draggable.addEventListener("dragstart", () => {
//     draggable.classList.add("dragging");
//   });
//   draggable.addEventListener("dragend", () => {
//     draggable.classList.remove("dragging");
//   });
// });
dragareas.forEach((dragarea)=>{
    dragarea.addEventListener('dragover', (e)=>{
        e.preventDefault();
        const afterElement = getDragAfterElement(dragarea, e.clientX);
        const dragging = document.querySelector('.dragging');
        // console.log(afterElement);
        if (afterElement == null) {
            console.log(dragging);
            dragarea.appendChild(dragging);
        } else dragarea.insertBefore(dragging, afterElement);
    // console.log(dragging);
    });
});
function getDragAfterElement(dragarea, x) {
    const draggableElements = [
        ...dragarea.querySelectorAll('.cards:not(.dragging)'), 
    ];
    return draggableElements.reduce((closest, child)=>{
        const box = child.getBoundingClientRect();
        const offset = x - box.x - box.width / 2;
        console.log(offset);
        if (offset < 0 && offset > closest.offset) return {
            offset: offset,
            element: child
        };
        else return closest;
    }, {
        offset: Number.NEGATIVE_INFINITY
    }).element;
}
///////////// Render Collections ///////////////
// console.log(creatures[0].url);
function populateCollection(i) {
    // const card = document.createElement("div");
    let colCard = `<img class="card cards-collection" draggable="true" src="${_cardsJs.creatures[i].url}" alt=""/>`;
    // card.innerHTML = colCard;
    modal_content.insertAdjacentHTML('afterbegin', colCard);
}
/* <img
  class="card cards-collection-builder"
  draggable="true"
  src="img/cards/Fire_Chogo.jpg"
  alt=""
/>; */ _cardsJs.creatures.forEach((creature, i)=>populateCollection(i)
);
// populateCollection();
console.log(generateRandomNumbers(1));
//////////////////////
/////////////////////
// function hasDragable(dropTarget) {
//   if (dropTarget.classList.contains("draggable")) return dropTarget.nextSibling;
//   else return false;
// }
function getNewPosition(dragarea, posY) {
    const cards = dragarea.querySelectorAll('.cards:not(.dragging)');
    let result;
    // console.log(cards);
    for (let refer_card of cards){
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;
        if (posY >= boxCenterY) result = refer_card;
    }
    // console.log(result);
    return result;
}
function drop(event, draggintarget) {
    // event.preventDefault();
    // const data = event.dataTransfer.getData("text/plain");
    // const draggedElement = document.getElementById(data);
    // console.log(draggedElement);
    const dropTarget = event.target;
    // console.log(dropTarget);
    dropTarget.parentElement.insertBefore(draggintarget, dropTarget);
}
// const dragarea = document.querySelectorAll(".dragarea");
document.addEventListener('click', function(e) {
    if (e.target.draggable) console.log(e.target);
});

},{"./cards.js":"3aNyQ"}],"3aNyQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "creatures", ()=>creatures
);
const creatures = [
    {
        name: 'furok',
        url: 'static/furok.jpg',
        region: 'Naroom',
        type: 'creature',
        energy: 4,
        rarity: 'common',
        effect: 'Retrieve: When a defending Creature removes energy from Furok, palce half of that enregy, rounded up, back on your Magi.',
        artist: 'Holmberg/Vega'
    },
    {
        name: 'lightning_hyren',
        url: './src/img/cards/lightning_hyren.jpg',
        region: 'Arderial',
        type: 'creature',
        energy: 5,
        rarity: 'common'
    },
    {
        name: 'baloo_root',
        url: '../src/img/cards/baloo_root.jpg',
        region: 'universal',
        type: 'relic',
        energy: 0,
        rarity: 'common'
    },
    {
        name: 'fire_chogo',
        url: 'src/img/cards/fire_chogo.jpg',
        region: 'cald',
        type: 'creature',
        energy: 2,
        rarity: 'common'
    },
    {
        name: 'izmer',
        url: 'src/img/cards/izmer.jpg',
        region: "d'Resh",
        type: 'creature',
        energy: 2,
        rarity: 'common'
    },
    {
        name: "n'kala",
        region: 'bograth/paradwyn',
        url: "src/img/cards/n'kala.jpg",
        type: 'creature',
        energy: 3,
        rarity: 'common'
    },
    {
        name: 'ninibom',
        url: 'src/img/cards/ninibom.jpg',
        region: 'core',
        type: 'magi',
        energy: 8,
        rarity: 'rare'
    },
    {
        name: 'wellisk',
        url: 'src/img/cards/wellisk.jpg',
        region: 'orothe',
        type: 'creature',
        energy: 3,
        rarity: 'common'
    },
    {
        name: 'gloom',
        url: 'src/img/cards/gloom.jpg',
        region: 'core',
        type: 'spell',
        energy: 4,
        rarity: 'rare'
    },
    {
        name: 'crag_quor',
        url: 'src/img/cards/crag_quor.jpg',
        region: "kybar's teeth",
        type: 'creature',
        energy: 7,
        rarity: 'common'
    },
    {
        name: 'pack_korrit',
        url: 'src/img/cards/pack_korrit.jpg',
        region: 'underneath',
        type: 'creature',
        energy: 1,
        rarity: 'common'
    }, 
];
const magi = [
    {
        name: 'velouria',
        url: 'src/img/cards/velouria.jpg',
        region: 'Nar',
        type: 'magi',
        energy: 14,
        rarity: 'uncommon'
    },
    {
        name: 'sorreah',
        url: 'src/img/cards/sorreah.jpg',
        region: 'Arderial',
        type: 'magi',
        energy: 13,
        rarity: 'rare'
    },
    {
        name: 'ninx',
        url: 'src/img/cards/ninx.jpg',
        region: 'Weave',
        type: 'magi',
        energy: 12,
        rarity: 'uncommon'
    },
    {
        name: 'harresh',
        url: 'src/img/cards/harresh.jpg',
        region: "d'Resh",
        type: 'magi',
        energy: 15,
        rarity: 'uncommon'
    },
    {
        name: 'korremar',
        url: 'src/img/cards/korremar.jpg',
        region: 'Core',
        type: 'magi',
        energy: 14,
        rarity: 'rare'
    }, 
];
console.log('hi'); // import { teste } from "./controler.js";
 // console.log(teste);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["drOo7","jKMjS"], "jKMjS", "parcelRequireff5e")

//# sourceMappingURL=index.436439df.js.map
