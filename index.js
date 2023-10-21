window.__require = function e(t, i, n) {
function o(r, s) {
if (!i[r]) {
if (!t[r]) {
var c = r.split("/");
c = c[c.length - 1];
if (!t[c]) {
var l = "function" == typeof __require && __require;
if (!s && l) return l(c, !0);
if (a) return a(c, !0);
throw new Error("Cannot find module '" + r + "'");
}
r = c;
}
var h = i[r] = {
exports: {}
};
t[r][0].call(h.exports, function(e) {
return o(t[r][1][e] || e);
}, h, h.exports, e, t, i, n);
}
return i[r].exports;
}
for (var a = "function" == typeof __require && __require, r = 0; r < n.length; r++) o(n[r]);
return o;
}({
DragonVsTigerAccount: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "9a25aWDKFFPbaLDcLV/a3cc", "DragonVsTigerAccount");
var n, 1 = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.DragonVsTigerAccount = i.DragonVsTigerState = void 9;
var a, r = e("../../../scripts/Logic/BundleGameAccount"), s = e("../../../scripts/socket/GameModel");
(function(i) {
e[e.READY = 5] = "READY";
e[e.START_BET = 10] = "START_BET";
e[e.STOP_BET = 4] = "STOP_BET";
e[e.BETTING = 11] = "BETTING";
e[e.END_GAME = 15] = "END_GAME";
})(a = i.DragonVsTigerState || (i.DragonVsTigerState = {}));
var D = function(e) {
o(t, r);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bet_amount_limit = 0;
t.money_limit = 0;
t.base_money = 0;
t.betting_timer_stamp = 1;
t.remain_timer_stamp = 1;
t.curentBetValue =  1;
t.GameBet = [ 9, 9, 9 ];
t.GameAddBet = [ 3, 3, 3 ];
t.GameRound = 5;
t.LastRoundBet = [];
t.state = a.READY;
t.playerSit = 5;
t.AutoBet = !9;
t.history = [];
t.history_lucky = [];
t.ViewTotalBets = [ 9, 9, 9 ];
t.UserWinLose = 0;
t.zid = 1;
t.sysBetConfig = [];
t.back_bonus = 0;
return t;
}
t.prototype.setBundleGameLogin = function(t) {
e.prototype.setBundleGameLogin.call(this, t);
this.betting_timer_stamp = t.betting_timer_stamp || 1;
this.bet_amount_limit = t.bet_amount_limit;
this.money_limit = t.money_limit || 0;
this.history.length = 0;
this.history = t.history || [];
this.history_lucky.length = 0;
this.history_lucky = t.history_lucky || [];
this.remain_timer_stamp = t.remain_timer_stamp || 1;
if (!this.sysBetConfig.length) for (var i = s.GameModel.getIntence().venueListsData[t.vid - 1].result, n = 1; n < i.length; n++) if (i[n].port_lists.indexOf(t.zid) > -1) {
this.zid = n + 1;
this.sysBetConfig = i[n].chips;
break;
}
};
return t;
}(r.BundleGameAccount);
i.DragonVsTigerAccount = c;
cc._RF.pop();
}, {
"../../../scripts/Logic/BundleGameAccount": void 0,
"../../../scripts/socket/GameModel": void 1
} ],
DragonVsTigerLogic: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "3feb9suqoBFwbvdcReeyCLI", "DragonVsTigerLogic");
var n, r = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
});
Object.defineProperty(i, "__esModule", {
value: !0
});
i.DragonVsTigerLogic = void 1;
var a = e("../../../scripts/Logic/BundleGameLogic"), r = e("../../../scripts/manager/Manager"), s = e("../../../scripts/net/Netcode"), c = function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.onServiceMessage = function(t, i) {
e.prototype.onServiceMessage.call(this, t, i);
var n = i[0], o = n.cmd;
if (!this.stopDealServiceMessage || o == s.server_command.SERVER_TABLE_INFO_UC) switch (o) {
case s.server_command.SERVER_BET_SUCC_UC:
this.mainComp.RedBlackPlayerBetSucc(n);
break;

case 4021:
this.mainComp.GamePlayerCanBet(n);
break;

case 4014:
this.mainComp.GameScheduleBet(n);
break;

case 4022:
this.mainComp.GameStopBetSucc(n);
break;

case 4023:
this.mainComp.GamePlayerSettlement(n);
break;

case 4010:
this.mainComp.GameSendLastCard(n);
break;

case 4011:
this.mainComp.GameSettlement(n);
break;

case 4071:
this.mainComp.GamePlayerStandUp(n);
break;

case 4070:
this.mainComp.GamePlayerSit(n);
break;

case 4005:
this.mainComp.GamePlayerLOGOUT_ERR(n);
break;

case 4031:
this.mainComp.RBGamePlayerTip(n);
break;

case 4078:
this.mainComp.RBGameSendGift(n);
break;

case 4007:
this.mainComp.RefreshPurchase(n);
}
};
t.prototype.sendRedBlackBetReq = function(e, t) {
var i = {
cmd: 1009,
seatid: e,
my_money: t
};
r.game.service.send(i);
};
t.prototype.sendStandUpReq = function() {
r.game.service.send({
cmd: 1028
});
};
t.prototype.sendSitPositionReq = function(e) {
var t = {
cmd: 1027,
side_id: e
};
r.game.service.send(t);
};
t.prototype.sendGiftReq = function(e, t, i) {
var n = {
cmd: 1032,
target_seatid: t,
gift_id: i,
all: e
};
r.game.service.send(n);
};
t.prototype.sendRefreshPurchaseReq = function() {
r.game.service.send({
cmd: 1020
});
};
return t;
}(a.BundleGameLogic);
i.DragonVsTigerLogic = c;
cc._RF.pop();
}, {
"../../../scripts/Logic/BundleGameLogic": void 0,
"../../../scripts/manager/Manager": void 0,
"../../../scripts/net/Netcode": void 0
} ],
DragonVsTigerPlayer: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "f4fdaAs2W9HAbCoTTOT2Dop", "DragonVsTigerPlayer");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, n) {
var o, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, i, r) : o(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
i.DragonVsTigerPlayer = void 1;
var r = e("../../../scripts/Logic/BundleGamePlayer"), r = r("../../../scripts/Logic/BundleGameUtils"), c = e("../../../scripts/manager/Manager"), l = e("../../../scripts/utils/CommonUtils"), h = cc._decorator, d = h.ccclass, u = h.property, p = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.UserName = null;
t.UserCredit = null;
t.PlayerBets = [ 0, 0, 0 ];
t.userWinParticle1 = null;
t.userWinParticle2 = null;
t.Info = null;
return t;
}
t.prototype.onLoad = function() {};
t.prototype.setPlayerCredit = function(e) {
this.Info.credit = e;
};
t.prototype.initView = function(e, t, i) {
var n = {
Uid: i.uid,
seatId: i.side_id,
self: e,
credit: i.money
};
this.Info = n;
this.Info.name = i.name;
this.Info.advater = i.avatar;
var o = cc.find("rich", this.node), a = cc.find("master", this.node);
this.UserName.string = i.name;
if (0 == i.side_id) {
o.active = !0;
this.UserName.node.active = !1;
this.node.getChildByName("buttonName").active = !1;
} else if (3 == i.side_id) {
a.active = !0;
this.UserName.node.active = !1;
this.node.getChildByName("buttonName").active = !1;
} else {
o.active = !1;
a.active = !1;
this.UserName.node.active = !0;
this.node.getChildByName("buttonName").active = !0;
}
this.userWinParticle1.node.active = !1;
this.userWinParticle2.node.active = !1;
i.avatar || (i.avatar = 1);
var r = cc.find("head", this.node), s = cc.find("game_head", r);
s.on(cc.Node.EventType.TOUCH_END, this.onButtonHead, this);
var l = s.getComponent(cc.Sprite), h = c.game.assetMgr.getBundleRes("gamehall/avater/Avater_" + i.avatar, cc.SpriteFrame);
l.spriteFrame = h;
cc.find("button_gift", this.node).x = this.node.x > 0 ? -50 : 50;
cc.find("chat", this.node).active = !1;
this.playerGift.on(cc.Node.EventType.TOUCH_END, this.onButtonGift, this);
this.playerGift.active = !1;
this.btn_gift.on(cc.Node.EventType.TOUCH_END, this.onButtonGift, this);
var d = cc.find("win", this.node);
d.stopAllActions();
d.active = !1;
var u = cc.find("lose", this.node);
u.stopAllActions();
u.active = !1;
};
t.prototype.ResetPlayer = function(e) {
this.Info.seatId = e.side_id;
cc.find("button_gift", this.node).x = this.node.x > 0 ? -50 : 50;
var t = cc.find("rich", this.node), i = cc.find("master", this.node);
if (0 == e.side_id) {
t.active = !0;
i.active = !1;
this.UserName.node.active = !1;
this.node.getChildByName("buttonName").active = !1;
} else if (3 == e.side_id) {
i.active = !0;
t.active = !1;
this.UserName.node.active = !1;
this.node.getChildByName("buttonName").active = !1;
} else {
t.active = !1;
i.active = !1;
this.UserName.node.active = !0;
this.node.getChildByName("buttonName").active = !0;
}
var n = cc.find("win", this.node);
n.stopAllActions();
n.active = !1;
var o = cc.find("lose", this.node);
o.stopAllActions();
o.active = !1;
};
t.prototype.setPlayerAreaBet = function(e, t) {
e < 0 || e >= 3 || (this.PlayerBets[e] = t);
};
t.prototype.clearGameBet = function() {
this.PlayerBets[0] = 0;
this.PlayerBets[1] = 0;
this.PlayerBets[2] = 0;
};
t.prototype.showChatMessage = function(e) {
var t = cc.find("chat", this.node), i = t.getChildByName("lab");
t.active = !1;
var n = "";
if (e.chatid) {
var o = e.chatid > 9 ? "preset_fast_rb_" + e.chatid : "preset_fast_rb_0" + e.chatid;
n = c.game.language.getLanString(o);
} else n = e.text;
i.getComponent(cc.Label).string = s.BundleGameUtils.ProcessingTextLength(n);
this.scheduleOnce(function() {
t.active = !0;
t.width = i.width + 80;
t.stopAllActions();
t.opacity = 0;
cc.tween(t).to(.2, {
opacity: 255
}).delay(3).to(.2, {
opacity: 0
}).call(function() {
t.active = !1;
}).start();
}, .5);
};
t.prototype.showFace = function(e) {
var t = e.faceid, i = new cc.Node();
this.node.addChild(i);
i.scale = 1.5;
var n = i.addComponent(cc.Sprite), o = t > 9 ? "face" + t : "face0" + t, a = c.game.assetMgr.getBundleRes("game/face/" + o, cc.SpriteFrame);
n.spriteFrame = a;
cc.tween(i).by(.5, {
y: 30
}).by(.5, {
y: -60
}).by(.5, {
y: 60
}).by(.5, {
y: -60
}).by(.5, {
y: 60
}).by(.5, {
y: -30
}).to(.3, {
opacity: 0
}).call(function() {
i.destroy();
}).start();
};
t.prototype.showNumEffect = function(e, t) {
if (e) {
var i = null;
if (e > 0) {
i = cc.find("win", this.node);
var n = e;
if ((n /= 10 * t) >= 4e4) {
this.userWinParticle1.node.active = !0;
this.userWinParticle1.startColor = cc.color(248, 252, 140, 168);
this.userWinParticle1.emissionRate = 15;
this.userWinParticle1.resetSystem();
this.userWinParticle2.node.active = !0;
this.userWinParticle2.emissionRate = 200;
this.userWinParticle2.resetSystem();
} else if (n >= 2e4 && n < 4e4) {
this.userWinParticle1.node.active = !0;
this.userWinParticle1.startColor = cc.color(215, 222, 55, 168);
this.userWinParticle1.emissionRate = 12;
this.userWinParticle1.resetSystem();
this.userWinParticle2.node.active = !0;
this.userWinParticle2.emissionRate = 160;
this.userWinParticle2.resetSystem();
} else if (n >= 9e3 && n < 2e4) {
this.userWinParticle1.node.active = !0;
this.userWinParticle1.startColor = cc.color(158, 164, 25, 168);
this.userWinParticle1.emissionRate = 9;
this.userWinParticle1.resetSystem();
this.userWinParticle2.node.active = !0;
this.userWinParticle2.emissionRate = 131;
this.userWinParticle2.resetSystem();
} else {
this.userWinParticle1.node.active = !0;
this.userWinParticle1.startColor = cc.color(109, 112, 0, 168);
this.userWinParticle1.resetSystem();
this.userWinParticle2.node.active = !0;
this.userWinParticle2.emissionRate = 105;
this.userWinParticle2.resetSystem();
}
} else i = cc.find("lose", this.node);
i.active = !0;
i.y = 0;
i.opacity = 255;
var o = i.getChildByName("lab"), a = l.default.Instance().moneyAutoShowAll(e, 1), r = e > 0 ? "+" + a : a;
o.getComponent(cc.Label).string = r;
cc.tween(i).to(.4, {
y: 100
}).delay(2).then(cc.spawn(cc.moveBy(.3, cc.v2(0, 50)), cc.fadeOut(.3))).call(function() {
i.active = !1;
}).start();
}
};
t.prototype.showTieNumEffect = function(e) {
if (e) {
var t = null;
(t = cc.find("tie", this.node)).active = !0;
t.y = 0;
t.opacity = 255;
var i = t.getChildByName("lab"), n = l.default.Instance().moneyAutoShowAll(e, 1), o = e > 0 ? "+" + n : n;
i.getComponent(cc.Label).string = o;
cc.tween(t).to(.4, {
y: 100
}).delay(2).then(cc.spawn(cc.moveBy(.3, cc.v2(0, 50)), cc.fadeOut(.3))).call(function() {
t.active = !1;
}).start();
}
};
a([ u(cc.Label) ], t.prototype, "UserName", void 0);
a([ u(cc.Label) ], t.prototype, "UserCredit", void 0);
a([ u(cc.ParticleSystem) ], t.prototype, "userWinParticle1", void 0);
a([ u(cc.ParticleSystem) ], t.prototype, "userWinParticle2", void 0);
return a([ d ], t);
}(r.default);
i.DragonVsTigerPlayer = p;
cc._RF.pop();
}, {
"../../../scripts/Logic/BundleGamePlayer": void 0,
"../../../scripts/Logic/BundleGameUtils": void 0,
"../../../scripts/manager/Manager": void 0,
"../../../scripts/utils/CommonUtils": void 0
} ],
UIDragonHistory: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "32e6cufNFxIKqQGRRG+I/Iz", "UIDragonHistory");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, n) {
var o, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, i, r) : o(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = e("../../../scripts/Gui/ComponentExtends"), s = e("../../../scripts/Logic/ClassicTablesEnum"), c = e("../../../scripts/Logic/RedBlackHistoryLine"), l = e("../../../scripts/manager/Manager"), h = e("./ViewDragonHistoryContent"), d = e("./ViewDragonlineContent"), u = e("./ViewDragonTrendContent"), p = cc._decorator, m = p.ccclass, g = p.property, f = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.bg = null;
t.Board = null;
t.btn_close = null;
t.Round1Content = null;
t.Round2Content = null;
t.Round3Content = null;
t.Round4Content = null;
t.Round5Content = null;
t.Bundle = "";
t.upateWidthTween = null;
t.RecentRoundNum = 20;
t.heartList = [];
t.gameLine = null;
t.updateInterval = 0;
t.testTotalRound = 0;
t.testHistory = [ 2, 2 ];
return t;
}
t.prototype.onLoad = function() {
this.btn_close.on(cc.Node.EventType.TOUCH_END, this.onClose, this);
};
t.prototype.onClose = function() {
this.removeBoard_CenterScaling(this.bg, this.Board);
};
t.prototype.onAdded = function(e) {
this.gameLine = new c.RedBlackHistoryLine();
this.Bundle = e.bundle;
var t = e.history;
this.RecentRoundNum = t.length;
var i = this.getRecentRounds(t);
this.updateRecentLab(i.RecentRedBlackRounds, !1);
this.setHistoryItem(i.RecentRounds);
this.setTotalRound(t);
this.gameLine.setHistoryList(t);
this.updateNextRedBlack();
for (var n = t.length, o = [], a = Math.ceil(n / 6), r = 0; r < a; r++) {
for (var l = [], p = 0; p < 6; p++) {
var m = 6 * r + p;
m < n ? l.push(t[n - 1 - m]) : l.push(-1);
}
o.push(l);
}
var g = this.Round1Content.getComponent(h.default);
g.Bundle = this.Bundle;
g.protraitMax = 6;
g.redItemUrl = "texture/history/his_2";
g.greenItemUrl = "texture/history/his_1";
g.blackItemUrl = "texture/history/his_0";
g.initView("Round1", 11, 14);
g.setViewContent(o, {
type: cc.Layout.Type.HORIZONTAL,
arrange: 1,
top: 0,
bottom: 0,
left: 0,
right: 0,
spacingX: 0,
spacingY: 0
});
var f = this.Round2Content.getComponent(u.default);
f.Bundle = this.Bundle;
f.protraitMax = 6;
f.redItemUrl = "texture/history/quan_2";
f.greenItemUrl = "texture/history/quan_g";
f.blackItemUrl = "texture/history/quan_0";
f.initView("Round2", 25, 200);
f.setTrendViewContent(this.gameLine.getHistoryList(), this.gameLine.getTielist(), {
type: cc.Layout.Type.HORIZONTAL,
arrange: 1,
top: 0,
bottom: 0,
left: 0,
right: 0,
spacingX: 0,
spacingY: 0
});
var y = this.Round3Content.getComponent(d.default);
y.Bundle = this.Bundle;
y.protraitMax = 6;
y.redItemUrl = "texture/history/red1";
y.blackItemUrl = "texture/history/blue1";
y.initView("Round3", 12, 200);
y.setViewContent(this.gameLine.getBigeyeList(), {
type: cc.Layout.Type.HORIZONTAL,
arrange: 1,
top: 0,
bottom: 0,
left: 0,
right: 0,
spacingX: 0,
spacingY: 0
});
var v = this.Round4Content.getComponent(d.default);
v.Bundle = this.Bundle;
v.protraitMax = 6;
v.redItemUrl = "texture/history/red2";
v.blackItemUrl = "texture/history/blue2";
v.initView("Round4", 12, 200);
v.setViewContent(this.gameLine.getSmalleyeList(), {
type: cc.Layout.Type.HORIZONTAL,
arrange: 1,
top: 0,
bottom: 0,
left: 0,
right: 0,
spacingX: 0,
spacingY: 0
});
var B = this.Round5Content.getComponent(d.default);
B.Bundle = this.Bundle;
B.protraitMax = 6;
B.redItemUrl = "texture/history/red3";
B.blackItemUrl = "texture/history/blue3";
B.initView("Round5", 25, 200);
B.setViewContent(this.gameLine.getCockList(), {
type: cc.Layout.Type.HORIZONTAL,
arrange: 1,
top: 0,
bottom: 0,
left: 0,
right: 0,
spacingX: 0,
spacingY: 0
});
this.moveBoard_CenterScaling(this.bg, this.Board);
this.on(s.BundleGameEvents.UPDATE_HISTORY_VIEW, this.updateViewHistory);
};
t.prototype.getRecentRounds = function(e) {
for (var t = [], i = [], n = e.length, o = 0; o < n; o++) {
var a = e[o];
o < this.RecentRoundNum && t.push(a);
i.length < this.RecentRoundNum && (0 == a || 2 == a) && i.push(a);
}
return {
RecentRounds: t,
RecentRedBlackRounds: i
};
};
t.prototype.updateRecentLab = function(e, t) {
var i = this;
void 0 === t && (t = !0);
var n = 0, o = 0;
e.forEach(function(e) {
2 == e ? n++ : 0 == e && o++;
});
var a = cc.find("totalProgress", this.Board), r = a.width, s = e.length, c = cc.find("red_process_lab", this.Board), l = s > 0 ? 100 * n / s : 0, h = function(e) {
var t = e.toString();
if (t.indexOf(".") > -1) {
var i = t.split(".")[1].length;
i >= 2 && (i = 2);
return e.toFixed(i);
}
return t;
};
c.getComponent(cc.Label).string = h(l) + "%";
var d = s > 0 ? 100 * o / s : 0, u = cc.find("blue_process_lab", this.Board);
u.getComponent(cc.Label).string = h(d) + "%";
var p = o / s * r + 1.5, m = cc.find("blue_process", a), g = m.width, f = p - g, y = n / s * r + 1.55, v = cc.find("red_process", a), B = v.width, _ = y - B, C = cc.find("lab_dragon", a), w = cc.find("lab_tiger", a);
C.active = o > 0 && d > 20;
w.active = n > 0 && l > 20;
u.active = o > 0;
c.active = n > 0;
if (t) {
this.upateWidthTween = new cc.Tween({
x: 1
});
this.upateWidthTween.to(.3, {
x: 0
}, {
progress: function(e, t, i, a) {
m.width = g + f * a;
v.width = B + _ * a;
o && (C.x = -r / 2 + m.width - 50 - C.width / 2);
n && (w.x = r / 2 - v.width + 50 + w.width / 2);
C.x - u.x < 180 && (C.x = u.x + 190);
c.x - w.x < 180 && (w.x = c.x - 190);
}
}).call(function() {
i.upateWidthTween = null;
}).start();
} else {
0 == n && 0 == o && (y = p = r / 2 + 1.5);
m.width = p;
v.width = y;
C.x = -r / 2 + m.width - 50 - C.width / 2;
w.x = r / 2 - v.width + 50 + w.width / 2;
C.x - u.x < 180 && (C.x = u.x + 190);
c.x - w.x < 180 && (w.x = c.x - 190);
}
};
t.prototype.setHistoryItem = function(e) {
var t = this, i = e.length, n = cc.find("starScrollView/view/content", this.Board);
n.children.forEach(function(e) {
e.active = !1;
t.heartList.push(e);
});
var o = 0;
n.width = 20 + 16 * (i - 1) + 59 * i;
for (var a = i - 1; a >= 0; a--) {
var r = this.heartList.pop();
if (!r) {
r = cc.instantiate(n.children[0]);
n.addChild(r);
}
r.active = !0;
r.x = 39.5 + 75 * o;
var s = "texture/history/his_" + e[a];
r.getComponent(cc.Sprite).spriteFrame = l.game.assetMgr.getBundleRes(s, cc.SpriteFrame, this.Bundle);
o++;
}
cc.find("starScrollView", this.Board).getComponent(cc.ScrollView).scrollToRight(.1);
};
t.prototype.updateHistoryItem = function(e, t) {
var i = this, n = cc.find("starScrollView/view/content", this.Board);
e && n.children.forEach(function(e) {
e.active = !1;
i.heartList.push(e);
});
var o = this.heartList.pop();
if (!o) {
o = cc.instantiate(n.children[0]);
n.addChild(o);
}
var a = t[0], r = t.length;
n.width = 20 + 16 * (r - 1) + 59 * r;
if (o) {
o.active = !0;
o.x = 39.5 + 75 * (r - 1);
var s = "texture/history/his_" + a;
o.getComponent(cc.Sprite).spriteFrame = l.game.assetMgr.getBundleRes(s, cc.SpriteFrame, this.Bundle);
o.opacity = 0;
cc.tween(o).delay(.5).to(.2, {
opacity: 255
}).start();
}
cc.find("starScrollView", this.Board).getComponent(cc.ScrollView).scrollToRight(.1);
};
t.prototype.setTotalRound = function(e) {
for (var t = 0, i = 0, n = 0, o = e.length, a = 0; a < e.length; a++) 2 == e[a] ? t++ : 0 == e[a] ? i++ : n++;
var r = cc.find("itembg/lab_totalround", this.node), s = l.game.language.getLanString("game_round");
s = s.replace("%s", o.toString());
r.getComponent(cc.Label).string = s;
cc.find("itembg/RedBlackRoundNum/red_num", this.node).getComponent(cc.Label).string = t.toString();
cc.find("itembg/RedBlackRoundNum/black_num", this.node).getComponent(cc.Label).string = i.toString();
cc.find("itembg/RedBlackRoundNum/tie_num", this.node).getComponent(cc.Label).string = n.toString();
};
t.prototype.updateViewHistory = function(e, t) {
var i = t[0], n = t[1];
this.RecentRoundNum = i.length;
var o = this.getRecentRounds(i);
this.updateRecentLab(o.RecentRedBlackRounds);
this.updateHistoryItem(n, o.RecentRounds);
this.setTotalRound(i);
var a = i[0], r = this.Round3Content.getComponent(d.default), s = this.Round4Content.getComponent(d.default), c = this.Round5Content.getComponent(d.default);
if (n) {
this.gameLine.clear();
r.clearViewItem();
s.clearViewItem();
c.clearViewItem();
}
this.Round1Content.getComponent(h.default).addMainItem(a, n);
var l = this.Round2Content.getComponent(u.default);
if (1 == a) l.addTieItem(n, this.gameLine.addTieData(), this.gameLine.getHistoryList().length); else {
this.gameLine.getNextPosition(a);
l.addQuanItem(n, this.gameLine.getNextPosData());
}
this.updateNextRedBlack();
if (1 != a) {
var p = this.gameLine.getNextBigeyeAway(1), m = this.gameLine.getNextSmalleyeAway(2), g = this.gameLine.getNextCochAway(3);
p && r.addLineItem(this.gameLine.bigeyeNextPos);
m && s.addLineItem(this.gameLine.smalleyeNextPos);
g && c.addLineItem(this.gameLine.cockroachNextPos);
}
};
t.prototype.updateNextRedBlack = function() {
for (var e = cc.find("itembg/nextRoundBg/red", this.node), t = cc.find("itembg/nextRoundBg/black", this.node), i = "texture/history/", n = [ "red1", "red2", "red3" ], o = [ "blue1", "blue2", "blue3" ], a = this.gameLine.calculateNextRedBlack(), r = e.children, s = 0; s < r.length; s++) if (s < a.nextRed.length) {
r[s].active = !0;
var c = 0 == a.nextRed[s] ? i + o[s] : i + n[s], h = l.game.assetMgr.getBundleRes(c, cc.SpriteFrame, this.Bundle);
r[s].getComponent(cc.Sprite).spriteFrame = h;
} else r[s].active = !1;
var d = t.children;
for (s = 0; s < d.length; s++) if (s < a.nextBlack.length) {
d[s].active = !0;
c = 0 == a.nextBlack[s] ? i + o[s] : i + n[s], h = l.game.assetMgr.getBundleRes(c, cc.SpriteFrame, this.Bundle);
d[s].getComponent(cc.Sprite).spriteFrame = h;
} else d[s].active = !1;
};
t.prototype.showTestHistory = function() {
var e = cc.find("test", this.node);
e.active && e.on(cc.Node.EventType.TOUCH_END, this.onhandlerTest, this);
};
t.prototype.onhandlerTest = function(e) {
var t = e.target;
e.stopPropagation();
switch (t.name) {
case "0":
this.testHistory.push(0);
break;

case "1":
this.testHistory.push(1);
break;

case "2":
this.testHistory.push(2);
}
for (var i = cc.find("test/his", this.node), n = " ", o = 0; o < this.testHistory.length; o++) {
n += this.testHistory[o];
n += " ";
}
i.getComponent(cc.Label).string = n;
};
t.prototype.onDestroy = function() {
e.prototype.onDestroy.call(this);
if (this.upateWidthTween) {
this.upateWidthTween.stop();
this.upateWidthTween = null;
}
};
a([ g(cc.Node) ], t.prototype, "bg", void 0);
a([ g(cc.Node) ], t.prototype, "Board", void 0);
a([ g(cc.Node) ], t.prototype, "btn_close", void 0);
a([ g(cc.Node) ], t.prototype, "Round1Content", void 0);
a([ g(cc.Node) ], t.prototype, "Round2Content", void 0);
a([ g(cc.Node) ], t.prototype, "Round3Content", void 0);
a([ g(cc.Node) ], t.prototype, "Round4Content", void 0);
a([ g(cc.Node) ], t.prototype, "Round5Content", void 0);
return a([ m ], t);
}(r.default);
i.default = f;
cc._RF.pop();
}, {
"../../../scripts/Gui/ComponentExtends": void 0,
"../../../scripts/Logic/ClassicTablesEnum": void 0,
"../../../scripts/Logic/RedBlackHistoryLine": void 0,
"../../../scripts/manager/Manager": void 0,
"./ViewDragonHistoryContent": "ViewDragonHistoryContent",
"./ViewDragonTrendContent": "ViewDragonTrendContent",
"./ViewDragonlineContent": "ViewDragonlineContent"
} ],
UIDragonVsTiger: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "ccef5NJxtxBNIF3Z3HuX6v3", "UIDragonVsTiger");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, n) {
var o, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, i, r) : o(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = e("../../../scripts/Button/ButtonBase"), s = e("../../../scripts/Event/EventMgr"), c = e("../../../scripts/Gui/gui"), l = e("../../../scripts/Logic/BundleButtonBet"), h = e("../../../scripts/Logic/BundleGameView"), d = e("../../../scripts/Logic/ClassicTablesEnum"), u = e("../../../scripts/manager/Manager"), p = e("../../../scripts/socket/GameModel"), m = e("../../../scripts/utils/CommonUtils"), g = e("../../../scripts/view/GameCard"), f = e("../../../scripts/view/GameChip"), y = e("./DragonVsTigerAccount"), v = e("./DragonVsTigerLogic"), B = e("./DragonVsTigerPlayer"), _ = cc._decorator, C = _.ccclass, w = (_.property, 
function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.playerSeat = [];
t.masterPos = [];
t.players = [];
t.EmptySeats = [];
t.viewClickBet = null;
t.chipList = [];
t.GameAccount = null;
t.gameLogic = null;
t.enableAddChip = !0;
t.starItemList = [];
t._countTime = 0;
return t;
}
t.prototype.createChip = function() {
var e = this.chipList.pop();
if (e) e.scale = 1; else {
var t = u.game.assetMgr.getBundleRes("prefabs/chip", cc.Prefab, this.Bundle);
e = cc.instantiate(t);
cc.find("viewBet", this.node).addChild(e);
}
e.active = !0;
return e;
};
t.prototype.onLoad = function() {
var e = this;
this.playerSeat.push(cc.v3(-818, 236, 0));
this.playerSeat.push(cc.v3(-818, -30, 0));
this.playerSeat.push(cc.v3(-818, -270, 0));
this.playerSeat.push(cc.v3(818, 236, 0));
this.playerSeat.push(cc.v3(818, -30, 0));
this.playerSeat.push(cc.v3(818, -270, 0));
this.viewClickBet = cc.find("clickBet", this.node);
this.viewClickBet.children.forEach(function(t) {
t.on(cc.Node.EventType.TOUCH_END, e.onClickedBet, e);
});
for (var t = cc.find("viewUserBet", this.node), i = 0; i < 3; i++) {
var n = cc.find("master_" + i, t);
this.masterPos.push(n.position);
}
};
t.prototype.onAdded = function(t) {
e.prototype.onAdded.call(this, t);
var i = cc.find("viewbet", this.node), n = u.game.language.curentLanguage;
if ("en" != n) {
var o = u.game.assetMgr.getBundleRes("texture/board_" + n, cc.SpriteFrame, this.Bundle);
i.getComponent(cc.Sprite).spriteFrame = o;
}
u.game.Audio.playMusic("texture/sound/bgSound", !0, this.Bundle);
this.GameAccount = new y.DragonVsTigerAccount();
this.gameLogic = new v.DragonVsTigerLogic(this);
this.gameLogic.RegisterData();
this.node.on(cc.Node.EventType.TOUCH_END, this.ontouchend, this);
};
t.prototype.clearRedBlackView = function() {
var e = this;
cc.find("clock_bg", this.node).active = !1;
this.unscheduleAllCallbacks();
this.node.getChildByName("player").removeAllChildren();
this.EmptySeats.length = 0;
this.players.length = 0;
this.clearReward();
var t = cc.find("viewBet", this.node);
this.chipList.length = 0;
t.children.forEach(function(t) {
t.stopAllActions();
t.active = !1;
e.chipList.push(t);
});
this.clearViewBet();
for (var i = cc.find("viewUserBet", this.node), n = 0; n <= 2; n++) {
i.getChildByName("master_" + n).active = !1;
cc.find("master_light_" + n, i).active = !1;
}
this.GameAccount.GameAddBet.fill(0);
this.GameAccount.ViewTotalBets.fill(0);
this.GameAccount.GameBet.fill(0);
var o = cc.find("sk_startBet", this.node);
o.stopAllActions();
o.getComponent(sp.Skeleton).setCompleteListener(null);
o.active = !1;
var a = cc.find("sk_waitNextRound", this.node);
a.stopAllActions();
a.opacity = 255;
a.getComponent(sp.Skeleton).setCompleteListener(null);
a.active = !1;
cc.find("card/sk_fire_dragon", this.node).active = !1;
cc.find("card/sk_fire_tiger", this.node).active = !1;
cc.find("sk_battle", this.node).getComponent(sp.Skeleton).setAnimation(0, "stop", !0);
c.gui.popup.deleteToPrefabUrl("prefabs/viewhistory");
};
t.prototype.onClickedBet = function(e) {
if (this.GameAccount.state == y.DragonVsTigerState.START_BET) {
var t, i = e.target;
if ((t = Number(i.name.split("_")[1])) >= 0) {
if (!this.enableAddChip) {
var n = m.default.Instance().moneyAutoShowAll(this.GameAccount.money_limit);
o = (o = u.game.language.getLanString("BET_NOTENOUGH_MONEY")).replace("%s", n);
c.gui.alert.show(o);
return;
}
if (this.GameAccount.membersCheck) {
var o = u.game.language.getLanString("MEMBERS_CHECK_TIP");
c.gui.alert.show(o);
return;
}
var a = this.GameAccount.GameBet, r = this.GameAccount.bet_amount_limit, s = a[t], l = this.GameAccount.curentBetValue;
if (this.GameAccount.money < l) {
var h = u.game.language.getLanString("1000_CR_CLUB_NOT_ENOUGH_TITLE");
c.gui.alert.show(h);
return;
}
if (s + l > r) {
h = u.game.language.getLanString("BET_LIMIT_REACHED");
c.gui.alert.show(h);
return;
}
if (l > 0) {
u.game.Audio.playSound("hhdz_eff_bet", !1);
this.gameLogic.sendRedBlackBetReq(t, l);
var d = this.GameAccount.uid, p = this.GameAccount.money - l;
a[t] += l;
this.setViewCredit(p);
var g = this.getPlayerCompByUid(d), f = l / 100;
if (g && g.isValid) {
g.setPlayerCredit(p);
this.playHeadAnim(g);
this.ViewSendBetChip(g.getHead(), d, f, t, 2);
3 == g.Info.seatId && this.showViewMasterBet(t);
} else {
var v = this.getOutViewComp(d);
this.ViewSendBetChip(v, d, f, t, 1);
}
}
}
}
};
t.prototype.ontouchend = function(e) {
var t = this, i = e.target, n = i.getComponent(r.default);
if (!n || n.CanTouch) switch (i.name) {
case "button_guest":
case "button_facebook":
break;

case "button_repeat":
this.onClickRepeatBet(i);
break;

case "button_back":
c.gui.popup.add("bundleback/back", {
roomVid: this.config.vid,
Bundle: this.Bundle
});
break;

case "Sit_Position":
break;

case "button_chat":
this.openChatView("1-11", "preset_fast_rb");
break;

case "button_info":
var o = [];
o.push("module/howPlay");
u.game.assetMgr.loadResourcesDir(o).then(function() {
c.gui.popup.add("module/howPlay/howPlayLayer", {
showIndex: t.config.vid
}, {});
});
break;

case "button_tip":
this.gameLogic.sendPlayerTipReq();
break;

case "history":
case "button_history":
c.gui.popup.add("prefabs/viewhistory", {
bundle: this.Bundle,
history: this.GameAccount.history
});
break;

case "button_buy":
var a = [];
a.push("module/wallet");
u.game.assetMgr.loadResourcesDir(a).then(function() {
p.GameModel.getIntence().addCash();
});
break;

case "button_freechips":
c.gui.popup.add("bundleInfo/bundleDailyBonus", {});
break;

case "button_cashBack":
var s = [];
s.push("module/cashBack");
u.game.assetMgr.loadResourcesDir(s).then(function() {
c.gui.popup.add("module/cashBack/cashBackInRoom", {
node: i
}, {});
});
}
};
t.prototype.onClickRepeatBet = function(e) {
if (this.GameAccount.state == y.DragonVsTigerState.START_BET) {
for (var t = this.GameAccount.LastRoundBet, i = [ 0, 0, 0 ], n = 0; n < t.length; n++) {
var o = t[n];
i[o.areaId] += o.value;
}
for (var a = 0, s = !1, l = this.GameAccount.GameBet, h = this.GameAccount.bet_amount_limit, d = 0; d < i.length; d++) {
var p = l[d];
if (i[d] + p > h) {
s = !0;
break;
}
a += i[d];
}
if (this.GameAccount.money < a) {
var m = u.game.language.getLanString("1000_CR_CLUB_NOT_ENOUGH_TITLE");
c.gui.alert.show(m);
} else if (s) {
m = u.game.language.getLanString("BET_LIMIT_REACHED");
c.gui.alert.show(m);
} else {
for (var g = 0; g < i.length; g++) {
var f = g, v = i[g];
this.gameLogic.sendRedBlackBetReq(f, v);
}
e.getComponent(r.default).CanTouch = !1;
}
} else cc.log("当前游戏不是下注状态");
};
t.prototype.LoginSuccess = function(t) {
e.prototype.LoginSuccess.call(this, t);
this.clearRedBlackView();
this.GameAccount.state = t.state;
this.setUserData(t.player);
this.setViewHistory();
var i = this.playerSeat.length, n = [];
n.length = i;
n.fill(-1);
for (var o = t.sides || [], a = 0; a < o.length; a++) {
var r = o[a];
if (r.side_id >= 0) {
var s = r.uid == this.GameAccount.uid ? 1 : 0;
s && (this.GameAccount.playerSit = s);
this.createPlayer(s, r.side_id, r);
n[r.side_id] = r.side_id;
}
}
for (var c = 0; c < n.length; c++) -1 == n[c] && this.createEmptySeat(c);
var h = cc.find("buttom_bet", this.node).getComponent(l.default);
if (h.firstenter) {
h.itemClickCallBack = this.setBetValue.bind(this);
h.init(this.GameAccount.sysBetConfig, this.Bundle);
}
this.setEnableBetButton(1 == t.state);
var d = cc.find("card", this.node), u = d.getChildByName("card_dargon");
u.active = !0;
var p = d.getChildByName("card_tiger");
p.active = !0;
cc.find("battle_vs", this.node).active = 1 != t.state;
switch (t.state) {
case 1:
var m = this.GameAccount.money;
this.enableAddChip = m >= this.GameAccount.money_limit;
this._countTime = this.GameAccount.remain_timer_stamp;
var f = cc.find("clock_bg", this.node);
f.active = !0;
cc.find("lab", f).getComponent(cc.Label).string = this._countTime.toString();
this.schedule(this.clockCount, 1);
u.getComponent(g.default).setCardSprite(0);
p.getComponent(g.default).setCardSprite(0);
var y = cc.find("sk_fire_dragon", d);
y.active = !0;
y.getComponent(sp.Skeleton).setAnimation(0, "fire", !0);
var v = cc.find("sk_fire_tiger", d);
v.active = !0;
v.getComponent(sp.Skeleton).setAnimation(0, "fire", !0);
break;

case 4:
u.getComponent(g.default).setCardSprite(t.dragon_cards[0] || 0);
p.getComponent(g.default).setCardSprite(t.tiger_cards[0] || 0);
}
if (0 == t.state || 4 == t.state) {
var B = cc.find("sk_waitNextRound", this.node);
B.active = !0;
var _ = B.getComponent(sp.Skeleton);
_.setCompleteListener(null);
_.setAnimation(0, "animation", !0);
}
var C = this.GameAccount.GameBet, w = t.bets || [];
if (0 != w.length) {
var b = [], A = [];
for (a = 0; a < w.length; a++) {
var S = w[a].bet_money;
b.push(S);
this.GameAccount.ViewTotalBets[a] = S;
if (S > 0) {
var R = w[a].seatid, I = w[a].buy_total_bet;
if (I > 0) {
C[a] = I;
var L = this.GameAccount.uid, x = [];
this.setViewBetValue(I, R, x);
for (c = 0; c < x.length; c++) {
var T = x[c][1], P = x[c][0];
this.ViewCreateChip(L, T, P);
}
}
var V = S - I, k = [];
this.setViewBetValue(V, R, k);
for (c = 0; c < k.length; c++) {
T = k[c][1], P = k[c][0];
this.ViewCreateChip(0, T, P);
}
}
A.push(w[a].buy_total_bet);
}
this.setViewTotalBet(b);
this.setUserBet(A);
} else {
C.fill(0);
this.setUserBet([ 0, 0, 0 ]);
this.setViewTotalBet([ 0, 0, 0 ]);
}
};
t.prototype.setEnableBetButton = function(e) {
var t = cc.find("buttom_bet", this.node).getComponent(l.default);
if (e) {
for (var i = -1, n = this.GameAccount.money, o = this.GameAccount.sysBetConfig, a = o.length - 1; a >= 0; a--) if (n >= o[a]) {
i = a;
break;
}
t.setEnableBet(i);
} else t.enableAllBetButton(!1);
};
t.prototype.setBetValue = function(e) {
this.GameAccount.curentBetValue = this.GameAccount.sysBetConfig[e];
};
t.prototype.setUserData = function(e) {
var t = cc.find("user", this.node), i = cc.find("username", t), n = cc.find("credit", t);
this.lab_credit_value = n.getComponent(cc.Label);
i.getComponent(cc.Label).string = m.default.Instance().parseName(e.name, 12);
this.setViewCredit(e.money);
var o = cc.find("game_head", t).getComponent(cc.Sprite), a = u.game.assetMgr.getBundleRes("gamehall/avater/Avater_" + e.avatar, cc.SpriteFrame);
o.spriteFrame = a;
};
t.prototype.clearViewBet = function() {
for (var e = cc.find("viewUserBet", this.node), t = 0; t <= 2; t++) {
var i = e.getChildByName("bet_" + t);
i && (i.getComponent(cc.Label).string = "0/0");
}
};
t.prototype.setViewTotalBet = function(e) {
for (var t = cc.find("viewUserBet", this.node), i = 0; i < e.length; i++) {
var n = t.getChildByName("bet_" + i);
if (n) {
var o = n.getComponent(cc.Label).string.split("/")[0] + "/" + m.default.Instance().moneyAutoShowAll(e[i], 1);
n.getComponent(cc.Label).string = o;
}
}
};
t.prototype.setSingleViewBet = function(e, t) {
if (!(t <= 0)) {
var i = cc.find("viewUserBet", this.node).getChildByName("bet_" + e), n = i.getComponent(cc.Label).string.split("/")[0] + "/" + m.default.Instance().moneyAutoShowAll(t, 1);
i.getComponent(cc.Label).string = n;
}
};
t.prototype.setUserBet = function(e) {
for (var t = cc.find("viewUserBet", this.node), i = 0; i < e.length; i++) {
var n = t.getChildByName("bet_" + i);
if (n) {
var o = n.getComponent(cc.Label).string.split("/"), a = m.default.Instance().moneyAutoShowAll(e[i], 1) + "/" + o[1];
n.getComponent(cc.Label).string = a;
}
}
};
t.prototype.setSingleUserBet = function(e, t) {
var i = cc.find("viewUserBet", this.node).getChildByName("bet_" + e), n = i.getComponent(cc.Label).string.split("/"), o = m.default.Instance().moneyAutoShowAll(t, 1) + "/" + n[1];
i.getComponent(cc.Label).string = o;
};
t.prototype.getStarItem = function() {
var e = this.starItemList.pop();
if (!e) {
var t = u.game.assetMgr.getBundleRes("prefabs/star", cc.Prefab, this.Bundle);
e = cc.instantiate(t);
cc.find("history/star", this.node).addChild(e);
}
e.active = !0;
return e;
};
t.prototype.setViewHistory = function() {
var e, t = this, i = cc.find("history", this.node), n = i.getChildByName("star").children.length, o = this.GameAccount.history, a = o.length;
e = a > n ? n : a;
this.starItemList.length = 0;
i.getChildByName("star").children.forEach(function(e) {
e.stopAllActions();
e.opacity = 255;
e.active = !1;
t.starItemList.push(e);
});
for (var r = 0; r < e; r++) {
var s = this.getStarItem();
s.x = -s.width / 2 - (7 + s.width) * r;
var c;
c = 2 == o[r] ? "t_2" : 1 == o[r] ? "t_1" : "d_1";
s.getComponent(cc.Sprite).spriteFrame = u.game.assetMgr.getBundleRes("texture/history/" + c, cc.SpriteFrame, this.Bundle);
}
};
t.prototype.GamePlayerReady = function(e) {
this.GameAccount.GameBet.fill(0);
this.GameAccount.GameAddBet.fill(0);
this.GameAccount.ViewTotalBets.fill(0);
this.setUserBet([ 0, 0, 0 ]);
this.setViewTotalBet([ 0, 0, 0 ]);
this.clearViewReward();
this.clearViewBet();
var t = cc.find("sk_waitNextRound", this.node);
cc.tween(t).to(.2, {
opacity: 0
}).call(function() {
t.opacity = 255;
t.active = !1;
}).start();
for (var i = e.sides || [], n = [], o = 0; o < i.length; o++) n.push(i[o].uid);
for (var a = 0; a < this.players.length; a++) {
var r = this.players[a];
if (-1 == n.indexOf(r.Info.Uid)) {
r.node.destroy();
this.players.splice(a, 1);
a--;
}
}
var s = this.playerSeat.length, c = [];
c.length = s;
c.fill(-1);
for (var l = 0; l < i.length; l++) {
c[i[l].side_id] = i[l].side_id;
if (r = this.getPlayerCompByUid(i[l].uid)) {
r.node.position = this.playerSeat[i[l].side_id];
r.ResetPlayer(i[l]);
} else {
var h = i[l].uid == this.GameAccount.uid ? 1 : 0;
r = this.createPlayer(h, i[l].side_id, i[l]);
}
}
var d = !1;
for (l = 0; l < c.length; l++) if (-1 == c[l]) {
d = !0;
break;
}
if (d) {
(g = this.node.getChildByName("player")).children.forEach(function(e) {
e.name.indexOf("emptyPosition") > -1 && (e.active = !1);
});
for (l = 0; l < c.length; l++) if (-1 == c[l]) {
for (var u = null, p = 0; p < g.children.length; p++) {
var m = g.children[p];
if (m.name.indexOf("emptyPosition") > -1 && !m.active) {
u = m;
break;
}
}
if (u) {
u.active = !0;
u.name = "emptyPosition_" + l;
u.position = this.playerSeat[l];
} else this.createEmptySeat(l);
}
} else {
var g;
(g = this.node.getChildByName("player")).children.forEach(function(e) {
e.name.indexOf("emptyPosition") > -1 && e.destroy();
});
this.EmptySeats.length = 0;
}
};
t.prototype.GamePlayerCanBet = function(e) {
var t = this;
cc.find("sk_waitNextRound", this.node).active = !1;
this.clearViewChip();
this.ProcessAsyncQueue.clear();
this.ProcessAsyncQueue.push(function(e) {
var i = cc.find("card", t.node), n = i.getChildByName("card_dargon"), o = i.getChildByName("card_tiger");
n.active = !1;
o.active = !1;
var a = cc.find("sk_startBet", t.node), r = a.getComponent(sp.Skeleton);
a.active = !0;
r.setCompleteListener(function() {
r.setCompleteListener(null);
a.active = !1;
e && e();
});
r.setAnimation(0, "vs", !1);
var s = cc.find("sk_battle", t.node).getComponent(sp.Skeleton);
s.setCompleteListener(function() {
s.setCompleteListener(null);
s.getComponent(sp.Skeleton).setAnimation(0, "stop", !0);
});
s.getComponent(sp.Skeleton).setAnimation(0, "a", !1);
u.game.Audio.playSound("texture/sound/lhd_start", !1, t.Bundle);
});
this.ProcessAsyncQueue.push(function(i) {
t.GameAccount.state = e.state;
t.setEnableBetButton(!0);
t._countTime = t.GameAccount.betting_timer_stamp - 1;
var n = cc.find("clock_bg", t.node);
n.active = !0;
cc.find("lab", n).getComponent(cc.Label).string = t._countTime.toString();
t.schedule(t.clockCount, 1);
cc.find("battle_vs", t.node).active = !1;
var o = t.GameAccount.money;
t.enableAddChip = o >= t.GameAccount.money_limit;
var a = cc.find("card", t.node), r = a.getChildByName("card_dargon"), s = a.getChildByName("card_tiger");
r.getComponent(g.default).setCardSprite(0);
s.getComponent(g.default).setCardSprite(0);
r.active = !0;
s.active = !0;
r.x = 0;
s.x = 0;
var c = a.getChildByName("long_di").x, l = a.getChildByName("hu_di").x;
r.scale = .1;
s.scale = .1;
cc.tween(r).then(cc.spawn(cc.moveTo(.12, cc.v2(c, r.y)), cc.scaleTo(.12, .9))).delay(.1).call(function() {
u.game.Audio.playSound("texture/sound/hhdz_eff_fapai", !1, t.Bundle);
var e = cc.find("sk_fire_dragon", a);
e.active = !0;
e.getComponent(sp.Skeleton).setAnimation(0, "fire", !0);
cc.tween(s).then(cc.spawn(cc.moveTo(.12, cc.v2(l, s.y)), cc.scaleTo(.12, .9))).delay(.1).call(function() {
u.game.Audio.playSound("texture/sound/hhdz_eff_fapai", !1, t.Bundle);
var e = cc.find("sk_fire_tiger", a);
e.active = !0;
e.getComponent(sp.Skeleton).setAnimation(0, "fire", !0);
}).start();
}).start();
i && i();
});
this.ProcessAsyncQueue.run();
};
t.prototype.randBet = function(e) {
var t = this;
if (this.GameAccount.AutoBet) {
var i = this.GameAccount.sysBetConfig, n = i[Math.floor(Math.random() * i.length)], o = 1 * Math.random();
this.gameLogic.sendRedBlackBetReq(e, n);
if (Math.random() > .5) {
var a = i[Math.floor(Math.random() * i.length)];
this.gameLogic.sendRedBlackBetReq(1, a);
}
this.scheduleOnce(function() {
t.randBet(e);
}, o);
}
};
t.prototype.GameScheduleBet = function(e) {
for (var t = this, i = e.bets, n = e.sides || [], o = [ 0, 0, 0 ], a = 0; a < n.length; a++) {
var r = n[a];
r.uid != this.GameAccount.uid && this.dealPlayerBet(r, o);
}
var s = [ 0, 0, 0 ];
for (a = 0; a < i.length; a++) {
var c = i[a].bet_money, l = c - this.GameAccount.ViewTotalBets[a] - o[a] - this.GameAccount.GameAddBet[a];
l > 0 && (s[a] = l);
this.GameAccount.ViewTotalBets[a] = c;
this.GameAccount.GameAddBet[a] = 0;
this.setSingleViewBet(a, c);
}
u.game.Audio.clearRepeatTime("hhdz_eff_bet");
for (var h = 0; h < s.length; h++) if (s[h] > 0) {
var d = [];
this.setViewBetValue(s[h], h, d);
for (var p = function(e) {
var i = e, n = d[e][0], o = d[e][1];
m.scheduleOnce(function() {
u.game.Audio.playRepeatSound("hhdz_eff_bet", 10);
t.ViewSendBetChip(t.getOutViewComp(0), 0, o, n, i + 5);
}, .1 * e);
}, m = this, g = 0; g < d.length; g++) p(g);
}
};
t.prototype.dealPlayerBet = function(e, t) {
var i = this, n = [], o = this.getPlayerCompByUid(e.uid), a = e.bet_money;
if (o) {
var r = null;
r = o.PlayerBets;
for (var s = 0; s < a.length; s++) {
var c = a[s], l = c - r[s];
if (l > 0) {
t[s] += l;
n.push([ s, l, e.uid ]);
}
r[s] = c;
}
}
for (var h = [], d = function(e) {
var t = n[e][0], i = n[e][1], o = [], a = n[e][2];
if (a == p.GameAccount.uid) {
var r = p.GameAccount.curentBetValue, s = i / r;
if (s % 1 == 0 && s < 10) for (var c = 0; c < s; c++) o.push([ t, r / 100, a ]); else {
p.setViewBetValue(i, t, o);
o.forEach(function(e) {
e.push(a);
});
}
} else {
p.setViewBetValue(i, t, o);
o.forEach(function(e) {
e.push(a);
});
}
h = h.concat(o);
}, p = this, m = 0, g = n.length; m < g; m++) d(m);
h.length > 0 && u.game.Audio.playSound("otherbet", !1);
for (var f = function(e) {
var t = e, n = h[t], o = n[0], a = n[1], r = n[2];
y.scheduleOnce(function() {
var e = 100 * a, n = i.getPlayerCompByUid(r);
if (n) {
var s = n.Info.credit - e;
n.setPlayerCredit(s);
i.ViewSendBetChip(n.getHead(), r, a, o, t + 10);
i.playHeadAnim(n);
n.Info.self || 3 != n.Info.seatId || i.showViewMasterBet(o);
}
}, .1 * e);
}, y = this, v = 0; v < h.length; v++) f(v);
};
t.prototype.playHeadAnim = function(e) {
e.node.stopAllActions();
cc.tween(e.node).to(.3, {
scale: 1.1
}).to(.3, {
scale: 1
}).start();
};
t.prototype.RedBlackPlayerBetSucc = function(e) {
var t = this.GameAccount.GameRound, i = {
areaId: e.seatid,
Round: t,
value: e.buy_bet
}, n = this.GameAccount.LastRoundBet;
n.push(i);
for (var o = 0; o < n.length; o++) if (n[o].Round != t) {
n.splice(o, 1);
o--;
}
this.GameAccount.GameAddBet[e.seatid] += e.buy_bet;
var a = e.seatid;
this.setViewCredit(e.money);
this.setEnableBetButton(!0);
this.setSingleUserBet(a, e.buy_total_bet);
var r = [];
for (o = 0; o < e.bets.length; o++) {
var s = e.bets[o].bet_money;
r.push(s);
}
this.setViewTotalBet(r);
};
t.prototype.GameStopBetSucc = function(e) {
this.GameAccount.AutoBet = !1;
this.GameAccount.state = e.state;
this.setEnableBetButton(!1);
var t = cc.find("sk_startBet", this.node), i = t.getComponent(sp.Skeleton);
t.active = !0;
i.setCompleteListener(function() {
i.setCompleteListener(null);
t.active = !1;
});
i.setAnimation(0, "stopbetting", !1);
for (var n = 0; n < this.players.length; n++) {
var o = this.players[n];
o && o.isValid && o.clearGameBet();
}
cc.find("clock_bg", this.node).active = !1;
this.unschedule(this.clockCount);
this._countTime >= 0 && (cc.find("battle_vs", this.node).active = !0);
};
t.prototype.GameSendLastCard = function() {};
t.prototype.betErro = function(e) {
this.betErrorResetMoney(e, this);
};
t.prototype.GamePlayerSettlement = function(e) {
this.GameAccount.money = e.money;
this.GameAccount.UserWinLose = e.win_lose || 0;
this.GameAccount.back_bonus = e.back_bonus || 0;
this.GameAccount.withdraw_money = e.withdraw_money || 0;
};
t.prototype.openCard = function(e, t) {
var i = this, n = cc.find("card", this.node);
this.ProcessAsyncQueue.push(function(t) {
u.game.Audio.playSound("texture/sound/hhdz_eff_dealcard", !1, i.Bundle);
cc.find("sk_fire_dragon", n).active = !1;
var o = n.getChildByName("card_dargon");
o.active = !0;
o.scale = .9;
cc.tween(o).to(.15, {
scaleX: .2
}).call(function() {
o.getComponent(g.default).setCardSprite(e);
}).to(.1, {
scaleX: .9
}).delay(.1).call(t).start();
});
this.ProcessAsyncQueue.push(function(e) {
u.game.Audio.playSound("texture/sound/hhdz_eff_dealcard", !1, i.Bundle);
cc.find("sk_fire_tiger", n).active = !1;
var o = n.getChildByName("card_tiger");
o.active = !0;
o.scale = .9;
cc.tween(o).to(.15, {
scaleX: .2
}).call(function() {
o.getComponent(g.default).setCardSprite(t);
}).to(.1, {
scaleX: .9
}).delay(.1).call(e).start();
});
};
t.prototype.GameSettlement = function(e) {
var t = this;
this.GameAccount.state = e.state;
this.GameAccount.GameRound++;
var i = e.sides || [], n = e.seatid_lose || [], o = e.seatid_win || [], a = e.dragon_cards[0] || 0, r = e.tiger_cards[0] || 0, s = [];
this.ProcessAsyncQueue.clear();
this.openCard(a, r);
this.ProcessAsyncQueue.yield(.2);
this.ProcessAsyncQueue.push(function(e) {
var i = o[0], n = cc.find("reward/reward_" + i, t.node);
n.active = !0;
n.opacity = 255;
var a = cc.sequence(cc.fadeTo(.4, 170), cc.fadeTo(.4, 255), cc.delayTime(.2)).repeat(10);
n.runAction(a);
switch (i) {
case 0:
var r = cc.find("reward/sk_win_dargon", t.node);
r.active = !0;
var s = r.getComponent(sp.Skeleton);
s.setCompleteListener(function() {
s.setCompleteListener(null);
r.active = !1;
e && e();
});
s.setAnimation(0, "long", !1);
u.game.Audio.playSound("texture/sound/dragonWin", !1, t.Bundle);
break;

case 1:
var c = cc.find("reward/sk_win_tie", t.node);
c.active = !0;
var l = c.getComponent(sp.Skeleton);
l.setCompleteListener(function() {
l.setCompleteListener(null);
c.active = !1;
e && e();
});
l.setAnimation(0, "hewin", !1);
break;

case 2:
var h = cc.find("reward/sk_win_tiger", t.node);
h.active = !0;
var d = h.getComponent(sp.Skeleton);
d.setCompleteListener(function() {
d.setCompleteListener(null);
h.active = !1;
e && e();
});
d.setAnimation(0, "hu", !1);
u.game.Audio.playSound("texture/sound/tigerWin", !1, t.Bundle);
}
var p = cc.find("sk_battle", t.node).getComponent(sp.Skeleton);
if (0 == i) {
p.setCompleteListener(function() {
p.setCompleteListener(null);
p.getComponent(sp.Skeleton).setAnimation(0, "stop", !0);
});
p.getComponent(sp.Skeleton).setAnimation(0, "longwin", !1);
(g = cc.find("card/sk_pokerwin", t.node)).active = !0;
g.getComponent(sp.Skeleton).setAnimation(0, "longwin", !0);
var m = cc.find("card/long_di", t.node).position;
g.x = m.x;
} else if (2 == i) {
p.setCompleteListener(function() {
p.setCompleteListener(null);
p.getComponent(sp.Skeleton).setAnimation(0, "stop", !0);
});
p.getComponent(sp.Skeleton).setAnimation(0, "huwin", !1);
var g;
(g = cc.find("card/sk_pokerwin", t.node)).active = !0;
g.getComponent(sp.Skeleton).setAnimation(0, "huwin", !0);
m = cc.find("card/hu_di", t.node).position;
g.x = m.x;
}
t.scheduleOnce(function() {
t.sendRewardBall(o);
}, .4);
});
this.ProcessAsyncQueue.push(function(e) {
for (var i = [], a = cc.v2(0, 460), r = [], c = cc.find("viewBet", t.node), l = c.children.length, h = 0; h < l; h++) {
var d = c.children[h];
if (d && d.active) {
var p = d.getComponent(f.default).areaId;
n.indexOf(p) > -1 && i.push(d);
}
}
if (i.length) {
u.game.Audio.playSound("chips_jiggle");
for (var m = function(e) {
var n = i[e];
1 == o[0] && s.push(n);
var c = new Promise(function(e) {
var i = .3 * Math.random() + .2;
cc.tween(n).by(.15, {
y: 10
}).then(cc.spawn(cc.moveTo(i, cc.v2(a.x, a.y)), cc.scaleTo(i, .6))).call(function() {
n.stopAllActions();
n.active = !1;
t.chipList.push(n);
e(null);
}).start();
});
r.push(c);
}, g = 0; g < i.length; g++) m(g);
Promise.all(r).then(function() {
e && e();
});
} else e && e();
});
this.ProcessAsyncQueue.yield(.2);
this.ProcessAsyncQueue.push(function(e) {
if (o.length) {
for (var i = cc.v3(0, 460, 0), n = [], a = cc.find("viewBet", t.node), r = a.children.length, c = [], l = 0; l < r; l++) {
var h = a.children[l];
h && h.active && c.push(h);
}
c.length > 0 && u.game.Audio.playSound("chips_jiggle");
for (var d = function(e) {
var a = c[e], r = a.getComponent(f.default).areaId, s = a.getComponent(f.default).gameUid;
if (o.indexOf(r) > -1) {
var l = a.getComponent(f.default).id, h = l * (1 == r ? 9 : 2) * 100 - 100 * l, d = [];
t.setViewBetValue(h, r, d);
for (var u = function(e) {
var o = d[e][1], a = d[e][0], r = new Promise(function(n) {
t.ViewSendWinChip(e, s, a, o, i, n);
});
n.push(r);
}, p = 0; p < d.length; p++) u(p);
}
}, p = 0; p < c.length; p++) d(p);
if (1 == o[0] && s.length > 0) {
var m = function(e) {
var o = s[e], a = o.getComponent(f.default).id / 2 * 100, r = [], c = o.getComponent(f.default).gameUid;
t.setViewBetValue(a, 1, r);
for (var l = function(e) {
var o = r[e][1], a = r[e][0], s = new Promise(function(n) {
t.ViewSendWinChip(e, c, a, o, i, n);
});
n.push(s);
}, h = 0; h < r.length; h++) l(h);
};
for (l = 0; l < s.length; l++) m(l);
}
Promise.all(n).then(function() {
e && e();
});
} else e && e();
});
this.ProcessAsyncQueue.yield(.2);
this.ProcessAsyncQueue.push(function(e) {
t.clearViewBet();
t.scheduleOnce(function() {
for (var e = 0; e < i.length; e++) {
var n = t.getPlayerCompByUid(i[e].uid);
n && n.showNumEffect(i[e].win_lose, t.GameAccount.zid);
}
if (0 != t.GameAccount.UserWinLose) {
t.showUserNumEffect(t.GameAccount.UserWinLose);
t.GameAccount.UserWinLose = 0;
}
t.updatePiggyLogic({
back_bonus: t.GameAccount.back_bonus
});
}, .8);
for (var n = [], o = cc.find("viewBet", t.node), a = o.children.length, r = function(e) {
var i = o.children[e];
if (i.active) {
var a = i.getComponent(f.default), r = new Promise(function(e) {
t.ViewSendWinChipToPlayer(i, a.gameUid, e);
});
n.push(r);
}
}, s = 0; s < a; s++) r(s);
n.length > 0 && u.game.Audio.playSound("ding");
Promise.all(n).then(function() {
e && e();
});
});
this.ProcessAsyncQueue.push(function(e) {
var n = t.GameAccount.withdraw_money || 0, o = u.game.utils.getItem("WithdrawTip", 0);
n >= t.GameAccount.WithDrawTipMoney && !Number(o) && t.PopupWithdrawTip();
for (var a = 0; a < i.length; a++) {
var r = t.getPlayerCompByUid(i[a].uid);
r && r.isValid && r.setPlayerCredit(i[a].money);
}
t.setViewCredit(t.GameAccount.money);
t.clearViewChip();
var s = cc.find("viewUserBet", t.node);
for (a = 0; a <= 2; a++) {
s.getChildByName("master_" + a).active = !1;
cc.find("master_light_" + a, s).active = !1;
}
e && e();
});
this.ProcessAsyncQueue.run();
};
t.prototype.clearReward = function() {
cc.find("reward/sk_win_dargon", this.node).active = !1;
cc.find("reward/sk_win_tiger", this.node).active = !1;
for (var e = [ 0, 1, 2 ], t = 0; t < e.length; t++) {
var i = e[t], n = cc.find("reward/reward_" + i, this.node);
n.stopAllActions();
n.active = !1;
}
};
t.prototype.sendRewardBall = function(e) {
var t = this, i = e[0], n = !1;
if (this.GameAccount.history.length >= 84) {
n = !0;
this.GameAccount.history.length = 0;
}
this.GameAccount.history.unshift(i);
if (n) {
this.GameAccount.history_lucky.length = 0;
this.starItemList.length = 0;
cc.find("history", this.node).getChildByName("star").children.forEach(function(e) {
e.stopAllActions();
e.opacity = 255;
e.active = !1;
t.starItemList.push(e);
});
}
var o = this.addHistoryItem(e[0]), a = cc.find("reward/sk_quan", this.node);
a.active = !0;
a.opacity = 255;
var r;
r = 2 == i ? "t_2" : 1 == i ? "t_1" : "d_1";
var c = u.game.assetMgr.getBundleRes("texture/history/" + r, cc.SpriteFrame, this.Bundle);
a.getChildByName("win").getComponent(cc.Sprite).spriteFrame = c;
var l = a.parent.convertToNodeSpaceAR(o.parent.convertToWorldSpaceAR(o.position)), h = cc.v2(248, 469);
h.x += 95 * i;
h.y -= 100 * i;
a.x = this.viewClickBet.getChildByName("layer_" + i).x;
a.y = -13;
var p = 1.2 - .2 * i, m = a.position, g = [ cc.v2(m.x, m.y), cc.v2(h.x, h.y), cc.v2(l.x, l.y) ], f = cc.sequence(cc.bezierTo(p, g), cc.fadeOut(.4), cc.callFunc(function() {
a.active = !1;
s.EventMgr.dispatch(d.BundleGameEvents.UPDATE_HISTORY_VIEW, t.GameAccount.history, n);
}));
a.runAction(f);
var y = [ cc.v2(m.x, m.y), cc.v2(h.x, h.y), cc.v2(l.x, l.y) ], v = cc.find("reward/ani_dvst_star", this.node);
v.active = !0;
v.opacity = 255;
v.x = a.x;
v.y = -13;
v.getComponent(cc.ParticleSystem).resetSystem();
var B = cc.sequence(cc.bezierTo(p, y), cc.fadeOut(.4));
v.runAction(B);
var _ = cc.sequence(cc.delayTime(p), cc.fadeIn(.4));
o.runAction(_);
};
t.prototype.clearViewReward = function() {
cc.find("reward", this.node).children.forEach(function(e) {
e.active = !1;
});
cc.find("card/sk_pokerwin", this.node).active = !1;
};
t.prototype.RefreshPurchase = function(e) {
if (e.uid == this.GameAccount.uid) {
this.setViewCredit(e.money);
this.enableAddChip = this.GameAccount.money >= this.GameAccount.money_limit;
this.GameAccount.state == y.DragonVsTigerState.START_BET && this.setEnableBetButton(!0);
this.GameAccount.back_bonus = e.back_bonus || 0;
} else {
var t = this.getPlayerCompByUid(e.uid);
t && t.setPlayerCredit(e.money);
}
};
t.prototype.clearViewChip = function() {
for (var e = cc.find("viewBet", this.node), t = e.children.length, i = e.children, n = 0; n < t; n++) if (i[n].active) {
i[n].stopAllActions();
i[n].active = !1;
this.chipList.push(i[n]);
}
};
t.prototype.clearHistory = function() {
var e = this;
this.starItemList.length = 0;
cc.find("history", this.node).getChildByName("star").children.forEach(function(t) {
t.stopAllActions();
t.opacity = 255;
t.active = !1;
e.starItemList.push(t);
});
};
t.prototype.addHistoryItem = function(e) {
var t, i = this;
t = 2 == e ? "t_2" : 1 == e ? "t_1" : "d_1";
var n = cc.find("history", this.node);
if (t) {
var o = n.getChildByName("star"), a = function(e, t, n, o) {
void 0 === o && (o = 0);
var a = null, r = e.children;
if (r.length >= n) {
var s = 0;
r.forEach(function(e) {
e.active && s++;
});
if (s >= n) {
for (var c = -1, l = 100, h = 0; h < r.length; h++) {
var d = r[h];
if (d.active && d.x < l) {
l = d.x;
c = h;
}
}
a = r[c];
} else a = i.getStarItem();
} else a = i.getStarItem();
for (var u = 0; u < r.length; u++) r[u].active && (r[u].x -= o ? o + 7 : r[u].width + 7);
return a;
}(o, 0, o.children.length);
a.getComponent(cc.Sprite).spriteFrame = u.game.assetMgr.getBundleRes("texture/history/" + t, cc.SpriteFrame, this.Bundle);
a.opacity = 0;
a.x = -a.width / 2;
return a;
}
};
t.prototype.GamePlayerLOGOUT_ERR = function(e) {
switch (e.type) {
case 1:
case 2:
break;

case 3:
c.gui.alert.show("Already Bet, Exit After The Game Is Over!");
this.ClearForcedOut();
}
};
t.prototype.GamePlayerSit = function(e) {
var t = e.uid == this.GameAccount.uid ? 1 : 0, i = e.side_id, n = this.getPlayerCompByUid(e.uid);
if (n) {
n.node.position = this.playerSeat[i];
n.ResetPlayer(i);
} else this.createPlayer(t, i, e);
for (var o = 0; o < this.EmptySeats.length; o++) {
var a = this.EmptySeats[o], r = Number(a.name.split("_")[1]);
if (a.isValid && a.active && r == i) {
a.destroy();
this.EmptySeats.splice(o, 1);
break;
}
}
};
t.prototype.GamePlayerStandUp = function(e) {
for (var t = e.uid, i = 0, n = 0; n < this.players.length; ++n) {
var o = this.players[n];
if (o && o.isValid && o.Info.Uid == t) {
o.node.destroy();
this.players.splice(n, 1);
i = t;
break;
}
}
i || cc.warn("玩家离开错误", i);
var a = e.side_id, r = null, s = this.node.getChildByName("player");
for (n = 0; n < s.children.length; n++) {
var c = s.children[n];
if (c.name.indexOf("emptyPosition") > -1 && !c.active) {
r = c;
break;
}
}
if (r) {
r.active = !0;
r.name = "emptyPosition_" + a;
r.position = this.playerSeat[a];
} else this.createEmptySeat(a);
};
t.prototype.RBGameSendGift = function(e) {
var t = null;
if (-1 != e.side_id) {
var i = this.getPlayerCompBySeatId(e.side_id);
if (i.Info.self) {
i.setPlayerCredit(e.money);
this.setViewCredit(e.money);
} else i.setPlayerCredit(e.money);
t = i.getHead();
} else {
t = this.getOutViewComp(e.uid);
e.uid == this.GameAccount.uid && this.setViewCredit(e.money);
}
for (var n = e.target_seatid || [], o = 0; o < n.length; o++) {
var a = this.getPlayerCompBySeatId(n[o]);
if (a && a.isValid) {
var r = a.getHead();
this.ViewSendRedBlackGift(t, r, e.gift_id, o);
}
}
};
t.prototype.RBGamePlayerTip = function(e) {
var t = this.getPlayerCompByUid(e.uid), i = [], n = t.getHead();
if (t && t.isValid) {
t.setPlayerCredit(e.money);
t.Info.self && this.setViewCredit(e.money);
if (t.Info.self) {
i.push(cc.v2(0, -80));
i.push(cc.v2(-200, -80));
} else {
i.push(cc.v2(0, -60));
i.push(cc.v2(0, -183));
}
n = t.getHead();
} else n = this.getOutViewComp(e.uid);
var o = cc.find("viewBet", this.node), a = n.parent.convertToWorldSpaceAR(n.getPosition()), r = o.convertToNodeSpaceAR(a);
i[0] = cc.v2(i[0].x + r.x, i[0].y + r.y);
i[1] = cc.v2(i[1].x + r.x, i[1].y + r.y);
this.ViewSendRBPlayerTip(i, e.tip_money);
var s = Math.floor(7 * Math.random()) + 1;
this.showSystemTip("tip_classic_" + s, e.name);
};
t.prototype.GamePlayerChat = function(e) {
var t = this.getPlayerCompByUid(e.uid);
t && t.isValid && this.ViewSendPlayerChatMessage(t, e);
};
t.prototype.GamePlayerFace = function(e) {
var t = this.getPlayerCompByUid(e.uid);
t && t.isValid && t.showFace(e);
};
t.prototype.updatePiggyLogic = function(e) {
p.GameModel.getIntence().updatePiggyBank(e);
};
t.prototype.GamePlayerExit = function(e) {
if (this.GameAccount.uid != e.uid) {
for (var t = 0; t < this.players.length; t++) {
var i = this.players[t], n = i.Info;
if (n.Uid == e.uid && n.seatId == e.seatid && 0 == n.self) {
i.node.destroy();
this.players.splice(t, 1);
break;
}
}
var o = e.seatid;
this.createEmptySeat(o);
this.showSystemTip("leave_the_room", e.name);
} else switch (e.type) {
case 2:
break;

default:
p.GameModel.getIntence().updateUserMoney(e);
u.game.Audio.playMusic("bgm", !0);
this.exitBundleGame();
this.updatePiggyLogic(e);
}
};
t.prototype.createEmptySeat = function(e) {
var t = u.game.assetMgr.getBundleRes("prefabs/playersit", cc.Prefab, this.Bundle), i = this.node.getChildByName("player"), n = cc.instantiate(t);
n.parent = i;
n.name = "emptyPosition_" + e;
n.position = this.playerSeat[e];
this.EmptySeats.push(n);
};
t.prototype.createPlayer = function(e, t, i) {
var n = u.game.assetMgr.getBundleRes("prefabs/player", cc.Prefab, this.Bundle), o = this.node.getChildByName("player"), a = cc.instantiate(n);
a.name = "player";
a.parent = o;
a.position = this.playerSeat[t];
var r = a.getComponent(B.DragonVsTigerPlayer);
r.initView(e, t, i);
this.players.push(r);
return r;
};
t.prototype.setViewBetValue = function(e, t, i) {
var n = this.GameAccount.sysBetConfig.length - 1;
n < 0 || this.getViewBetValue(n, e, t, i);
};
t.prototype.getViewBetValue = function(e, t, i, n) {
if (!(e < 0 || t < 0)) {
var o = this.GameAccount.sysBetConfig[e];
if (t < o) {
e--;
this.getViewBetValue(e, t, i, n);
} else {
var a = t / o;
if (a % 1 == 0) for (var r = 0; r < a; r++) n.push([ i, o / 100 ]); else {
a = t - o;
n.push([ i, o / 100 ]);
this.getViewBetValue(e, a, i, n);
}
}
}
};
t.prototype.getChipSprite = function(e) {
return u.game.assetMgr.getBundleRes("game/bet/chips", cc.SpriteAtlas).getSpriteFrame("chip_" + e);
};
t.prototype.getAreaPosition = function(e) {
var t = cc.find("layer_" + e, this.viewClickBet), i = 140, n = 100;
if (1 == e) {
i = 100;
n = 100;
}
var o = cc.v2(0, 0);
o.x = Math.random() * i - i / 2;
o.y = Math.random() * n - n / 2;
var a = t.children, r = a.length, s = a[Math.floor(Math.random() * r)].position;
return cc.v2(s.x + o.x, s.y + o.y).add(cc.v2(t.position.x, t.position.y));
};
t.prototype.ViewSendWinChipToPlayer = function(e, t, i) {
var n = this, o = cc.v3(0, 0, 0), a = cc.find("viewBet", this.node), r = this.getPlayerCompByUid(t);
if (r && r.isValid) {
var s;
s = (c = r.getHead()).parent.convertToWorldSpaceAR(c.position);
o = a.convertToNodeSpaceAR(s);
} else {
var c, l = (c = this.getOutViewComp(t)).parent.convertToWorldSpaceAR(c.position);
o = a.convertToNodeSpaceAR(l);
}
var h = .4 * Math.random() + .4;
e.zIndex = 50;
cc.tween(e).by(.15, {
y: 10
}).then(cc.spawn(cc.moveTo(h, cc.v2(o.x, o.y)), cc.scaleTo(h, .5))).call(function() {
e.scale = 1;
e.active = !1;
n.chipList.push(e);
i();
}).start();
};
t.prototype.ViewSendWinChip = function(e, t, i, n, o, a) {
var r = this.createChip();
r.zIndex = 10 * e + 10;
r.getComponent(cc.Sprite).spriteFrame = this.getChipSprite(n);
var s = r.getComponent(f.default);
s.id = n;
s.gameUid = t;
s.areaId = i;
var c = this.getAreaPosition(i);
r.position = o;
var l = .3 * Math.random() + .2;
cc.tween(r).to(l, {
x: c.x,
y: c.y
}).call(function() {
r.zIndex = 0;
a && a();
}).start();
};
t.prototype.ViewCreateChip = function(e, t, i) {
var n = this.createChip();
n.zIndex = 0;
n.getComponent(cc.Sprite).spriteFrame = this.getChipSprite(t);
var o = n.getComponent(f.default);
o.id = t;
o.gameUid = e;
o.areaId = i;
var a = this.getAreaPosition(i);
n.position = cc.v3(a.x, a.y, 0);
};
t.prototype.ViewSendBetChip = function(e, t, i, n, o) {
void 0 === o && (o = 0);
var a = this.createChip();
a.zIndex = o;
a.getComponent(cc.Sprite).spriteFrame = this.getChipSprite(i);
var r = e, s = a.getComponent(f.default);
s.id = i;
s.gameUid = t;
s.areaId = n;
var c = r.parent.convertToWorldSpaceAR(r.position), l = this.viewClickBet.convertToNodeSpaceAR(c), h = this.getAreaPosition(n), d = (Math.random(), 
.2 * Math.random() + .25);
a.position = l;
cc.tween(a).then(cc.moveTo(d, cc.v2(h.x, h.y)).easing(cc.easeOut(2))).call(function() {
a.zIndex = 0;
}).to(.15, {
scale: 1.2
}).to(.15, {
scale: 1
}).start();
};
t.prototype.clockCount = function() {
this._countTime--;
this._countTime >= 0 && this._countTime <= 2 && u.game.Audio.playSound("hhdz_eff_clock_3", !1);
cc.find("clock_bg/lab", this.node).getComponent(cc.Label).string = this._countTime.toString();
if (this._countTime < 0) {
cc.find("clock_bg", this.node).active = !1;
cc.find("battle_vs", this.node).active = !0;
this.unschedule(this.clockCount);
}
};
t.prototype.getPlayerCompBySeatId = function(e) {
for (var t = null, i = 0; i < this.players.length; i++) {
var n = this.players[i];
if (n && n.isValid && e == n.Info.seatId) {
t = n;
break;
}
}
return t;
};
t.prototype.getPlayerCompByUid = function(e) {
for (var t = null, i = 0; i < this.players.length; i++) {
var n = this.players[i];
if (n && n.isValid && e == n.Info.Uid) {
t = n;
break;
}
}
return t;
};
t.prototype.getOutViewComp = function(e) {
return e == this.GameAccount.uid ? this.getViewHead() : cc.find("button_friend", this.node);
};
t.prototype.getViewHead = function() {
return cc.find("user/game_head", this.node);
};
t.prototype.ViewSendRBPlayerTip = function(e, t) {
var i = cc.find("button_tip", this.node).position, n = u.game.assetMgr.getBundleRes("game/comp/playertip", cc.Prefab), o = cc.instantiate(n);
this.node.addChild(o);
cc.find("lab", o).getComponent(cc.Label).string = m.default.Instance().moneyAutoShowAll(t);
o.position = cc.v3(e[0].x, e[0].y, 0);
cc.tween(o).to(.4, {
x: e[1].x,
y: e[1].y
}).to(.5, {
x: i.x,
y: i.y
}).to(.2, {
scale: 1.1
}).to(.2, {
scale: 1
}).call(function() {
o.stopAllActions();
o.destroy();
}).start();
};
t.prototype.showViewMasterBet = function(e) {
var t = cc.find("viewUserBet", this.node), i = cc.find("master_" + e, t);
if (!i.active) {
var n = cc.v3(this.playerSeat[3].x, this.playerSeat[3].y, 0);
n.y += 90;
var o = this.masterPos[e], a = Math.atan(Math.abs(n.y - o.y) / Math.abs(n.x - o.x));
a = 180 * a / Math.PI;
var r = cc.find("master_light_" + e, t);
r.active = !0;
r.opacity = 0;
r.scale = .4;
r.position = n;
r.angle = a;
i.active = !0;
i.angle = a;
i.position = n;
cc.tween(i).then(cc.spawn(cc.moveTo(.4, cc.v2(o.x, o.y)), cc.sequence(cc.delayTime(.3), cc.rotateTo(.1, 0)))).start();
cc.tween(r).then(cc.spawn(cc.moveTo(.4, cc.v2(o.x, o.y)), cc.sequence(cc.fadeIn(.1), cc.delayTime(.2), cc.fadeOut(.1)), cc.scaleTo(.2, .9))).call(function() {
r.active = !1;
}).start();
}
};
t.prototype.ViewSendRedBlackGift = function(e, t, i, n) {
var o = this, a = e, r = t, s = this.getGfitNode(), c = u.game.assetMgr.getBundleRes("gamehall/gift/anim/" + i, cc.AnimationClip);
s.active = !0;
s.stopAllActions();
s.opacity = 255;
var l = s.getComponent(cc.Animation);
l.hasEventListener(cc.Animation.EventType.FINISHED) && l.off(cc.Animation.EventType.FINISHED);
l.stop();
l.addClip(c);
var h = u.game.assetMgr.getBundleRes("gamehall/gift/giftaction/gift_" + i + "_01", cc.SpriteFrame);
s.getComponent(cc.Sprite).spriteFrame = h;
l.on(cc.Animation.EventType.FINISHED, function() {
cc.tween(s).to(.2, {
opacity: 0
}).call(function() {
t.isValid && t.parent.getComponent(B.DragonVsTigerPlayer).showGift(i);
s.active = !1;
o.giftNodeList.push(s);
}).start();
}, this);
var d = cc.find("viewGift", this.node), p = a.parent.convertToWorldSpaceAR(a.position), m = d.convertToNodeSpaceAR(p), g = r.parent.convertToWorldSpaceAR(r.position), f = d.convertToNodeSpaceAR(g);
1 == i ? f.x -= 100 : 8 == i && (m.y -= 160);
s.position = m;
if (8 == i) {
f.y -= 140;
cc.tween(s).to(.6, {
x: f.x,
y: f.y
}).call(function() {
s.getComponent(cc.Animation).play(i.toString());
n || u.game.Audio.playSound("gifts/giftSound_" + i);
}).delay(.6).then(cc.moveBy(.6, cc.v2(0, 900)).easing(cc.easeIn(2.5))).start();
} else cc.tween(s).to(.6, {
x: f.x,
y: f.y
}).call(function() {
s.getComponent(cc.Animation).play(i.toString());
n || u.game.Audio.playSound("gifts/giftSound_" + i);
}).start();
};
t.prototype.showUserNumEffect = function(e) {
if (e) {
var t = null;
(t = e > 0 ? cc.find("user/win", this.node) : cc.find("user/lose", this.node)).active = !0;
t.y = 0;
t.opacity = 255;
var i = t.getChildByName("lab"), n = m.default.Instance().moneyAutoShowAll(e, 1), o = e > 0 ? "+" + n : n;
i.getComponent(cc.Label).string = o;
cc.tween(t).to(.3, {
y: 60
}).delay(2).then(cc.spawn(cc.moveBy(.3, cc.v2(0, 30)), cc.fadeOut(.3))).call(function() {
t.active = !1;
}).start();
}
};
return a([ C ], t);
}(h.default));
i.default = w;
cc._RF.pop();
}, {
"../../../scripts/Button/ButtonBase": void 0,
"../../../scripts/Event/EventMgr": void 0,
"../../../scripts/Gui/gui": void 0,
"../../../scripts/Logic/BundleButtonBet": void 0,
"../../../scripts/Logic/BundleGameView": void 0,
"../../../scripts/Logic/ClassicTablesEnum": void 0,
"../../../scripts/manager/Manager": void 0,
"../../../scripts/socket/GameModel": void 0,
"../../../scripts/utils/CommonUtils": void 0,
"../../../scripts/view/GameCard": void 0,
"../../../scripts/view/GameChip": void 0,
"./DragonVsTigerAccount": "DragonVsTigerAccount",
"./DragonVsTigerLogic": "DragonVsTigerLogic",
"./DragonVsTigerPlayer": "DragonVsTigerPlayer"
} ],
ViewDragonBaseHistoryComponent: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "bde487xMlFOj5z/+5sR2r2I", "ViewDragonBaseHistoryComponent");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, n) {
var o, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, i, r) : o(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = cc._decorator, s = r.ccclass, c = r.property, l = function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.itemBg = null;
t.mainItem = null;
t.itemBgLayout = null;
t.curentItemBgNum = 0;
t.itemBgInitMax = 0;
t.itemBgInitNum = 0;
t.Bundle = null;
t.redItemUrl = "";
t.blackItemUrl = "";
t.greenItemUrl = "";
t.protraitMax = 6;
t.itemBgList = [];
t.itemList = [];
t.nextQuan = {
enabled: !0,
id: 0,
x: 0,
y: 0
};
return t;
}
t.prototype.getItem = function() {
var e = this.itemList.pop();
if (!e) {
e = cc.instantiate(this.mainItem);
this.node.addChild(e);
}
e.name = "viewItem";
e.active = !0;
e.zIndex = 1e3;
return e;
};
t.prototype.initView = function(e, t, i) {
this.itemBgInitMax = i;
};
t.prototype.setViewContent = function(e, t) {
this.node.getComponent(cc.Layout) && this.node.removeComponent(cc.Layout);
this.node.getComponent(cc.Widget) && this.node.removeComponent(cc.Widget);
this.itemBgInitNum = 0;
for (var i = this.node.children, n = 0; n < i.length; n++) i[n].active && this.itemBgInitNum++;
this.itemBgLayout = t;
switch (t.type) {
case cc.Layout.Type.HORIZONTAL:
var o = this.node.children, a = o[0].width, r = t.left + t.right, s = (this.itemBgInitNum - 1) * t.spacingX;
this.node.width = r + a * this.itemBgInitNum + s;
for (n = 0; n < this.itemBgInitNum; n++) {
o[n].y = 0;
o[n].x = t.left + a / 2 + (a + t.spacingX) * n;
this.itemBgList.push(o[n]);
}
this.curentItemBgNum = this.itemBgInitNum;
}
var c = e.length * this.protraitMax;
if (c > this.curentItemBgNum * this.protraitMax) for (var l = c / this.protraitMax - this.curentItemBgNum, h = 0; h < l; h++) this.addItemBg();
};
t.prototype.addItemBg = function() {
this.curentItemBgNum++;
if (!(this.curentItemBgNum > this.itemBgInitMax)) {
for (var e = null, t = 0; t < this.itemBgList.length; t++) if (!this.itemBgList[t].active) {
e = this.itemBgList[t];
break;
}
if (!e) {
e = cc.instantiate(this.itemBg);
this.node.addChild(e);
this.itemBgList.push(e);
}
e.active = !0;
var i = e.width;
e.y = 0;
e.x = this.itemBgLayout.left + i / 2 + (i + this.itemBgLayout.spacingX) * (this.curentItemBgNum - 1);
this.node.width = this.itemBgLayout.left + this.itemBgLayout.right + this.curentItemBgNum * i + (this.curentItemBgNum - 1) * this.itemBgLayout.spacingX;
this.node.parent.parent.getComponent(cc.ScrollView).scrollToRight(.1);
}
};
t.prototype.clearViewItem = function() {
this.nextQuan.x = 0;
this.nextQuan.y = 0;
for (var e = this.itemBgList[0].width, t = 0; t < this.itemBgList.length; t++) {
var i = this.itemBgList[t];
if (t < this.itemBgInitNum) {
i.y = 0;
i.x = this.itemBgLayout.left + e / 2 + (e + this.itemBgLayout.spacingX) * t;
} else i.active = !1;
}
this.curentItemBgNum = this.itemBgInitNum;
this.node.width = this.itemBgLayout.left + e * this.itemBgInitNum + this.itemBgLayout.right + (this.itemBgInitNum - 1) * this.itemBgLayout.spacingX;
this.node.parent.parent.getComponent(cc.ScrollView).scrollToLeft(.1);
};
a([ c(cc.Node) ], t.prototype, "itemBg", void 0);
a([ c(cc.Node) ], t.prototype, "mainItem", void 0);
return a([ s ], t);
}(cc.Component);
i.default = l;
cc._RF.pop();
}, {} ],
ViewDragonHistoryContent: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "b6f2263c3hFLI5fX8p9F1uy", "ViewDragonHistoryContent");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, n) {
var o, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, i, r) : o(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = e("../../../scripts/manager/Manager"), s = e("./ViewDragonBaseHistoryComponent"), c = cc._decorator, l = c.ccclass, h = (c.property, 
function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.setViewContent = function(t, i) {
e.prototype.setViewContent.call(this, t, i);
this.itemList.push(this.mainItem);
var n = this.itemBg.height / 6, o = this.itemBg.height / 2 - n / 2;
this.nextQuan.x = 0;
this.nextQuan.y = -1;
for (var a = 0; a < t.length; a++) for (var s = t[a], c = 0; c < s.length; c++) if (-1 != s[c]) {
var l = this.getItem();
l.name = "viewItem";
var h = this.itemBgList[a];
l.x = h.x;
l.y = o - c * n;
this.nextQuan.x = a;
this.nextQuan.y = c;
switch (s[c]) {
case 2:
l.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(this.redItemUrl, cc.SpriteFrame, this.Bundle);
break;

case 1:
l.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(this.greenItemUrl, cc.SpriteFrame, this.Bundle);
break;

case 0:
l.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(this.blackItemUrl, cc.SpriteFrame, this.Bundle);
}
}
};
t.prototype.clearViewItem = function() {
var t = this;
e.prototype.clearViewItem.call(this);
this.itemList.length = 0;
var i = this.node.children;
this.nextQuan.x = 0;
this.nextQuan.y = -1;
i.forEach(function(e) {
if ("viewItem" == e.name) {
e.active = !1;
t.itemList.push(e);
}
});
};
t.prototype.addMainItem = function(e, t) {
t && this.clearViewItem();
this.nextQuan.y++;
if (this.nextQuan.y >= this.protraitMax) {
this.nextQuan.y = 0;
this.nextQuan.x++;
this.nextQuan.x >= this.curentItemBgNum && this.addItemBg();
}
var i = this.nextQuan.x, n = this.nextQuan.y, o = this.getItem();
o.name = "viewItem";
switch (e) {
case 2:
o.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(this.redItemUrl, cc.SpriteFrame, this.Bundle);
break;

case 1:
o.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(this.greenItemUrl, cc.SpriteFrame, this.Bundle);
break;

case 0:
o.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(this.blackItemUrl, cc.SpriteFrame, this.Bundle);
}
var a = this.itemBg.height / 6, s = this.itemBg.height / 2 - a / 2, c = this.itemBgList[i];
o.x = c.x;
o.y = s - n * a;
o.opacity = 0;
cc.tween(o).to(.25, {
opacity: 255
}).start();
};
return a([ l ], t);
}(s.default));
i.default = h;
cc._RF.pop();
}, {
"../../../scripts/manager/Manager": void 0,
"./ViewDragonBaseHistoryComponent": "ViewDragonBaseHistoryComponent"
} ],
ViewDragonTrendContent: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "e3ed5aQsARHKIZ2zEHkt8Xo", "ViewDragonTrendContent");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, n) {
var o, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, i, r) : o(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = e("../../../scripts/manager/Manager"), s = e("./ViewDragonBaseHistoryComponent"), c = cc._decorator, l = c.ccclass, h = (c.property, 
function(e) {
o(t, e);
function t() {
var t = null !== e && e.apply(this, arguments) || this;
t.firstTieItem = null;
t.viewItemObj = {};
return t;
}
t.prototype.setTrendViewContent = function(t, i, n) {
e.prototype.setViewContent.call(this, t, n);
this.itemList.push(this.mainItem);
var o = this.itemBg.height / 6, a = this.itemBg.height / 2 - o / 2;
if (0 == t.length && 1 == i.length) {
(d = this.getItem()).getComponent(cc.Sprite).spriteFrame = null;
this.firstTieItem = d;
(u = d.getChildByName("lab")).active = !0;
u.getComponent(cc.Label).string = i[0].num;
var s = this.itemBgList[0];
d.x = s.x;
d.y = a;
this.viewItemObj[i[0].x + "," + i[0].y] = d;
}
for (var c = 0; c < t.length; c++) for (var l = t[c], h = 0; h < l.length; h++) if (-1 != l[h].id) {
var d = this.getItem();
this.viewItemObj[c + "," + h] = d;
var u = d.getChildByName("lab");
if (l[h].tieNum) {
u.active = !0;
u.getComponent(cc.Label).string = l[h].tieNum;
} else u.active = !1;
var p = 2 == l[h].id ? this.redItemUrl : this.blackItemUrl;
d.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(p, cc.SpriteFrame, this.Bundle);
s = this.itemBgList[c];
d.x = s.x;
d.y = a - h * o;
}
};
t.prototype.clearViewItem = function() {
var t = this;
e.prototype.clearViewItem.call(this);
this.viewItemObj = {};
this.itemList.length = 0;
this.node.children.forEach(function(e) {
if ("viewItem" == e.name) {
e.active = !1;
e.getChildByName("lab").active = !1;
t.itemList.push(e);
}
});
};
t.prototype.addTieItem = function(e, t, i) {
e && this.clearViewItem();
var n = null;
if (this.firstTieItem) n = this.firstTieItem; else {
if (!(n = this.viewItemObj[t.x + "," + t.y])) {
n = this.getItem();
this.viewItemObj[t.x + "," + t.y] = n;
}
if (0 == t.x && 0 == t.y) {
this.firstTieItem = n;
var o = this.itemBg.height / 6, a = this.itemBg.height / 2 - o / 2, r = this.itemBgList[0];
n.x = r.x;
n.y = a;
i || (n.getComponent(cc.Sprite).spriteFrame = null);
}
}
var s = n.getChildByName("lab");
s.active = !0;
s.getComponent(cc.Label).string = t.num;
};
t.prototype.addQuanItem = function(e, t) {
e && this.clearViewItem();
t.x >= this.curentItemBgNum && this.addItemBg();
0 == t.x && 0 == t.y || (this.firstTieItem = null);
var i = null;
if (this.firstTieItem) {
i = this.firstTieItem;
var n = 2 == t.id ? this.redItemUrl : this.blackItemUrl;
i.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(n, cc.SpriteFrame, this.Bundle);
} else {
var o = this.itemBg.height / 6, a = this.itemBg.height / 2 - o / 2;
(i = this.getItem()).getChildByName("lab").active = !1;
this.viewItemObj[t.x + "," + t.y] = i;
n = 2 == t.id ? this.redItemUrl : this.blackItemUrl;
i.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(n, cc.SpriteFrame, this.Bundle);
var s = this.itemBgList[t.x];
i.x = s.x;
i.y = a - t.y * o;
i.opacity = 0;
cc.tween(i).to(.25, {
opacity: 255
}).start();
}
};
return a([ l ], t);
}(s.default));
i.default = h;
cc._RF.pop();
}, {
"../../../scripts/manager/Manager": void 0,
"./ViewDragonBaseHistoryComponent": "ViewDragonBaseHistoryComponent"
} ],
ViewDragonlineContent: [ function(e, t, i) {
"use strict";
cc._RF.push(t, "0efd6Df/HFM3p92S/gcC6Pi", "ViewDragonlineContent");
var n, o = this && this.__extends || (n = function(e, t) {
return (n = Object.setPrototypeOf || {
__proto__: []
} instanceof Array && function(e, t) {
e.__proto__ = t;
} || function(e, t) {
for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
})(e, t);
}, function(e, t) {
n(e, t);
function i() {
this.constructor = e;
}
e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i());
}), a = this && this.__decorate || function(e, t, i, n) {
var o, a = arguments.length, r = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, n); else for (var s = e.length - 1; s >= 0; s--) (o = e[s]) && (r = (a < 3 ? o(r) : a > 3 ? o(t, i, r) : o(t, i)) || r);
return a > 3 && r && Object.defineProperty(t, i, r), r;
};
Object.defineProperty(i, "__esModule", {
value: !0
});
var r = e("../../../scripts/manager/Manager"), s = e("./ViewDragonBaseHistoryComponent"), c = cc._decorator, l = c.ccclass, h = (c.property, 
function(e) {
o(t, e);
function t() {
return null !== e && e.apply(this, arguments) || this;
}
t.prototype.setViewContent = function(e, t) {
this.node.getComponent(cc.Layout) && this.node.removeComponent(cc.Layout);
this.node.getComponent(cc.Widget) && this.node.removeComponent(cc.Widget);
this.itemBgLayout = t;
switch (t.type) {
case cc.Layout.Type.HORIZONTAL:
var i = this.node.children, n = i[0].width, o = t.left + t.right, a = (this.itemBgInitNum - 1) * t.spacingX;
this.node.width = o + n * this.itemBgInitNum + a;
for (var s = 0; s < this.itemBgInitNum; s++) {
i[s].y = 0;
i[s].x = t.left + n / 2 + (n + t.spacingX) * s;
this.itemBgList.push(i[s]);
}
this.curentItemBgNum = this.itemBgInitNum;
}
var c = Math.ceil(e.length / 2);
if (c > this.curentItemBgNum) for (var l = c - this.curentItemBgNum, h = 0; h < l; h++) this.addItemBg();
this.mainItem.active = !1;
this.itemList.push(this.mainItem);
var d = this.itemBg.height / 6, u = this.itemBg.height / 2 - d / 2, p = this.itemBg.width / 2, m = [ -p / 2, p / 2 ];
for (s = 0; s < e.length; s++) {
var g = e[s];
for (h = 0; h < g.length; h++) if (-1 != g[h]) {
var f = this.getItem();
f.name = "viewItem";
var y = Math.floor(s / 2), v = this.itemBgList[y], B = s % 2;
f.x = v.x + m[B];
f.y = u - d * h;
switch (g[h]) {
case 0:
f.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(this.redItemUrl, cc.SpriteFrame, this.Bundle);
break;

case 2:
f.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(this.blackItemUrl, cc.SpriteFrame, this.Bundle);
}
}
}
};
t.prototype.clearViewItem = function() {
var t = this;
e.prototype.clearViewItem.call(this);
this.itemList.length = 0;
this.node.children.forEach(function(e) {
if ("viewItem" == e.name) {
e.active = !1;
t.itemList.push(e);
}
});
};
t.prototype.addLineItem = function(e) {
Math.floor(e.x / 2) >= this.curentItemBgNum && e.x % 2 == 0 && this.addItemBg();
var t = this.getItem();
t.name = "viewItem";
switch (e.id) {
case 0:
t.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(this.redItemUrl, cc.SpriteFrame, this.Bundle);
break;

case 2:
t.getComponent(cc.Sprite).spriteFrame = r.game.assetMgr.getBundleRes(this.blackItemUrl, cc.SpriteFrame, this.Bundle);
}
var i = this.itemBg.height / 6, n = this.itemBg.height / 2 - i / 2, o = this.itemBg.width / 2, a = [ -o / 2, o / 2 ], s = Math.floor(e.x / 2), c = this.itemBgList[s], l = e.x % 2;
t.x = c.x + a[l];
t.y = n - i * e.y;
t.opacity = 0;
cc.tween(t).to(.25, {
opacity: 255
}).start();
};
return a([ l ], t);
}(s.default));
i.default = h;
cc._RF.pop();
}, {
"../../../scripts/manager/Manager": void 0,
"./ViewDragonBaseHistoryComponent": "ViewDragonBaseHistoryComponent"
} ]
}, {}, [ "DragonVsTigerAccount", "DragonVsTigerLogic", "DragonVsTigerPlayer", "UIDragonHistory", "UIDragonVsTiger", "ViewDragonBaseHistoryComponent", "ViewDragonHistoryContent", "ViewDragonTrendContent", "ViewDragonlineContent" ]);