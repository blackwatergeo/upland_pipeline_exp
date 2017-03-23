//>>built
require({
    cache: {
        "widgets/LayerList/LayerListView": function(){
            define("dijit/_WidgetBase dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom-construct dojo/on dojo/query jimu/dijit/CheckBox ./PopupMenu dijit/_TemplatedMixin dojo/text!./LayerListView.html jimu/dijit/LoadingIndicator dojo/dom-attr dojo/dom-class dojo/dom-style ./NlsStrings".split(" "), function(u, w, c, r, h, d, s, l, q, a, b, x, g, n, m, t, y){
                return w([u, b], {
                    templateString: x,
                    _currentSelectedLayerRowNode: null,
                    postMixInProperties: function(){
                        this.inherited(arguments);
                        this.nls = y.value
                    },
                    postCreate: function(){
                        r.forEach(this.operLayerInfos.finalLayerInfos, function(e){
                            this.drawListNode(e, 0, this.layerListTable, !0)
                        }, this);
                        r.forEach(this.operLayerInfos.tableInfos, function(e){
                            this.drawListNode(e, 0, this.tableListTable, !0)
                        }, this)
                    },
                    drawListNode: function(e, p, f){
                        var a;
                        0 === e.newSubLayers.length ? (a = this.addLayerNode(e, p, f), this.config.showLegend ? this.addLegendNode(e, p, a.subNode) : t.set(l(".showLegend-image", a.currentNode)[0], "display", "none")) : (a = this.addLayerNode(e, p, f), r.forEach(e.newSubLayers, c.hitch(this, function(e, p){
                            this.drawListNode(p, e + 1, a.subNode)
                        }, p)))
                    },
                    addLayerNode: function(e, p, f){
                        var k = d.create("tr", {
                            "class": "jimu-widget-row layer-row ",
                            layerTrNodeId: e.id
                        }, f), b, v, m, x, h, n;
                        b = d.create("td", {
                            "class": "col col1"
                        }, k);
                        for (m = 0; m < p; m++) 
                            d.create("div", {
                                "class": "begin-blank-div jimu-float-leading",
                                innerHTML: ""
                            }, b);
                        n = d.create("div", {
                            "class": "showLegend-div jimu-float-leading"
                        }, b);
                        x = d.create("img", {
                            "class": "showLegend-image jimu-leading-margin1",
                            src: isRTL ? this.layerListWidget.folderUrl + "images/v_left.png" : this.layerListWidget.folderUrl + "images/v_right.png",
                            alt: "l"
                        }, n);
                        v = d.create("div", {
                            "class": "div-select jimu-float-leading jimu-leading-margin1 jimu-trailing-margin1"
                        }, b);
                        m = new q({
                            checked: e.isVisible()
                        });
                        d.place(m.domNode, v);
                        h = d.create("div", {
                            "class": "noLegend-div jimu-float-leading"
                        }, b);
                        d.create("img", {
                            "class": "noLegend-image",
                            src: this.layerListWidget.folderUrl + (e.isTable ? "images/table.png" : "images/noLegend.png"),
                            alt: "l"
                        }, h);
                        if (e.noLegend || e.isTable) 
                            t.set(n, "display", "none"), t.set(v, "display", "none"), t.set(h, "display", "block");
                        t.set(b, "width", 12 * p + 35 + "px");
                        p = d.create("td", {
                            "class": "col col2"
                        }, k);
                        d.create("div", {
                            innerHTML: e.title,
                            "class": "div-content jimu-float-leading"
                        }, p);
                        b = d.create("td", {
                            "class": "col col3"
                        }, k);
                        b = d.create("div", {
                            "class": "layers-list-popupMenu-div"
                        }, b);
                        v = (new a({
                            _layerInfo: e,
                            box: this.layerListWidget.domNode.parentNode,
                            _appConfig: this.layerListWidget.appConfig
                        })).placeAt(b);
                        this.own(s(v, "onMenuClick", c.hitch(this, this._onPopupMenuItemClick, e, v)));
                        v.loading = new g({
                            hidden: !0
                        });
                        v.loading.placeAt(b);
                        f = d.create("tr", {
                            "class": "",
                            layerContentTrNodeId: e.id
                        }, f);
                        f = d.create("td", {
                            "class": "",
                            colspan: "3"
                        }, f);
                        f = d.create("table", {
                            "class": "layer-sub-node"
                        }, f);
                        this.own(s(p, "click", c.hitch(this, this._onRowTrClick, e, x, k, f)));
                        this.own(s(n, "click", c.hitch(this, this._onRowTrClick, e, x, k, f)));
                        this.own(s(k, "mouseover", c.hitch(this, this._onLayerNodeMouseover, k, v)));
                        this.own(s(k, "mouseout", c.hitch(this, this._onLayerNodeMouseout, k, v)));
                        this.own(s(m.domNode, "click", c.hitch(this, this._onCkSelectNodeClick, e, m)));
                        this.own(s(b, "click", c.hitch(this, this._onPopupMenuClick, e, v, k)));
                        return {
                            currentNode: k,
                            subNode: f
                        }
                    },
                    addLegendNode: function(e, p, f){
                        f = d.create("tr", {
                            "class": "legend-node-tr"
                        }, f);
                        f = d.create("td", {
                            "class": "legend-node-td"
                        }, f);
                        try {
                            var a = e.createLegendsNode();
                            t.set(a, "font-size", 12 * (p + 1) + "px");
                            d.place(a, f)
                        } 
                        catch (b) {
                            console.error(b)
                        }
                    },
                    _fold: function(e, p, a){
                        "none" === t.get(a, "display") ? (t.set(a, "display", "table"), n.set(p, "src", this.layerListWidget.folderUrl + "images/v.png"), e = !1) : (t.set(a, "display", "none"), n.set(p, "src", isRTL ? this.layerListWidget.folderUrl + "images/v_left.png" : this.layerListWidget.folderUrl + "images/v_right.png"), e = !0);
                        return e
                    },
                    _onCkSelectNodeClick: function(e, a, f){
                        a.checked ? e.setTopLayerVisible(!0) : e.setTopLayerVisible(!1);
                        f.stopPropagation()
                    },
                    _onPopupMenuClick: function(e, a, f, b){
                        a.btnClick();
                        this._changeSelectedLayerRow(f);
                        a && "opened" === a.state ? a.closeDropMenu() : (this._hideCurrentPopupMenu(), a.loading.show(), a &&
                        (this.currentPopupMenu = a, a.getPopupMenuInfo().then(c.hitch(this, function(f){
                            var b = l("[itemid\x3dcontrolPopup]", a.dropMenuNode)[0];
                            b && e.controlPopupInfo && (e.controlPopupInfo.enablePopup ? h.setAttr(b, "innerHTML", this.nls.removePopup) : h.setAttr(b, "innerHTML", this.nls.enablePopup));
                            a.openDropMenu(f.getDeniedItems());
                            a.loading.hide()
                        }))));
                        b.stopPropagation()
                    },
                    _hideCurrentPopupMenu: function(){
                        this.currentPopupMenu && "opened" === this.currentPopupMenu.state && this.currentPopupMenu.closeDropMenu()
                    },
                    _onLayerNodeMouseover: function(a, b){
                        m.add(a, "layer-row-mouseover");
                        b && m.add(b.btnNode, "jimu-icon-btn-selected")
                    },
                    _onLayerNodeMouseout: function(a, b){
                        m.remove(a, "layer-row-mouseover");
                        b && m.remove(b.btnNode, "jimu-icon-btn-selected")
                    },
                    _onPopupMenuHide: function(){
                        console.log("aaa")
                    },
                    _onLayerListWidgetPaneClick: function(a){
                        a && a.closeDropMenu()
                    },
                    _onRowTrClick: function(a, b, f, k){
                        this._changeSelectedLayerRow(f);
                        b = this._fold(a, b, k);
                        a.isLeaf() && !b && (k = l(".legends-div", k)[0], b = l(".legends-loading-img", k)[0], k && b && a.drawLegends(k, this.layerListWidget.appConfig.portalUrl))
                    },
                    _changeSelectedLayerRow: function(a){
                        this._currentSelectedLayerRowNode &&
                        this._currentSelectedLayerRowNode ===
                        a ||
                        (this._currentSelectedLayerRowNode && m.remove(this._currentSelectedLayerRowNode, "jimu-widget-row-selected"), m.add(a, "jimu-widget-row-selected"), this._currentSelectedLayerRowNode = a)
                    },
                    _onPopupMenuItemClick: function(a, b, f, k){
                        k = {
                            itemKey: f.key,
                            extraData: k,
                            layerListWidget: this.layerListWidget,
                            layerListView: this
                        };
                        "transparency" === f.key ? "none" === t.get(b.transparencyDiv, "display") ? b.showTransNode(a.getOpacity()) : b.hideTransNode() : (a = b.popupMenuInfo.onPopupMenuClick(k), a.closeMenu && b.closeDropMenu())
                    },
                    _exchangeLayerTrNode: function(a, b){
                        var f = l("tr[layerTrNodeId\x3d'" + a + "']", this.layerListTable)[0], k = l("tr[layerTrNodeId\x3d'" + b + "']", this.layerListTable)[0], c = l("tr[layerContentTrNodeId\x3d'" + b + "']", this.layerListTable)[0];
                        this.layerListTable.removeChild(k);
                        this.layerListTable.insertBefore(k, f);
                        this.layerListTable.removeChild(c);
                        this.layerListTable.insertBefore(c, f)
                    },
                    moveUpLayer: function(a){
                        var b = this.operLayerInfos.moveUpLayer(a);
                        b && this._exchangeLayerTrNode(b, a)
                    },
                    moveDownLayer: function(a){
                        var b = this.operLayerInfos.moveDownLayer(a);
                        b && this._exchangeLayerTrNode(a, b)
                    }
                })
            })
        },
        "widgets/LayerList/PopupMenu": function(){
            define("dojo/_base/declare dojo/_base/array dojo/_base/html dojo/_base/lang dojo/query dojo/on dojo/Deferred jimu/dijit/DropMenu dijit/_TemplatedMixin dijit/form/HorizontalSlider dijit/form/HorizontalRuleLabels dojo/text!./PopupMenu.html dojo/dom-style ./NlsStrings ./PopupMenuInfo".split(" "), function(u, w, c, r, h, d, s, l, q, a, b, x, g, n, m){
                return u([l, q], {
                    templateString: x,
                    popupMenuInfo: null,
                    _popupMenuInfoDef: null,
                    _deniedItems: null,
                    _layerInfo: null,
                    constructor: function(){
                        this.nls = n.value;
                        this._deniedItems = [];
                        this._popupMenuInfoDef = new s
                    },
                    _getDropMenuPosition: function(){
                        return {
                            top: "28px",
                            left: 12 - c.getStyle(this.dropMenuNode, "width") + "px"
                        }
                    },
                    _getTransNodePosition: function(){
                        return {
                            top: "15px",
                            left: -174 - c.getStyle(this.dropMenuNode, "width") + "px"
                        }
                    },
                    _onBtnClick: function(){
                    },
                    btnClick: function(){
                        this.dropMenuNode ||
                        m.create(this._layerInfo, this._appConfig).then(r.hitch(this, function(a){
                            this.items = a.getDisplayItems();
                            this.popupMenuInfo = a;
                            this._createDropMenuNode();
                            this.own(d(this.dropMenuNode, "click", r.hitch(this, function(a){
                                a.stopPropagation()
                            })));
                            this._popupMenuInfoDef.resolve(a)
                        }))
                    },
                    getPopupMenuInfo: function(){
                        return this._popupMenuInfoDef
                    },
                    _refresh: function(){
                        this._denyItems()
                    },
                    _denyItems: function(){
                        var a = h("div[class~\x3d'menu-item']", this.dropMenuNode).forEach(function(a){
                            c.removeClass(a, "menu-item-dissable")
                        });
                        w.forEach(this._deniedItems, function(b){
                            a.forEach(function(a){
                                c.getAttr(a, "itemId") === b &&
                                (c.addClass(a, "menu-item-dissable"), "url" === b && h(".menu-item-description", a).forEach(function(a){
                                    c.setAttr(a, "href", "#");
                                    c.removeAttr(a, "target")
                                }))
                            })
                        }, this)
                    },
                    selectItem: function(a){
                        -1 === this._deniedItems.indexOf(a.key) && this.emit("onMenuClick", a)
                    },
                    openDropMenu: function(a){
                        a.then(r.hitch(this, function(a){
                            this._deniedItems = a;
                            this._refresh()
                        }));
                        this.inherited(arguments)
                    },
                    closeDropMenu: function(){
                        this.inherited(arguments);
                        this.hideTransNode()
                    },
                    _onTransparencyDivClick: function(a){
                        a.stopPropagation()
                    },
                    showTransNode: function(a){
                        this.transHorizSlider ||
                        (this._createTransparencyWidget(), this.transHorizSlider.set("value", 1 - a));
                        g.set(this.transparencyDiv, "top", this._getTransNodePosition().top);
                        isRTL ? g.set(this.transparencyDiv, "right", this._getTransNodePosition().left) : g.set(this.transparencyDiv, "left", this._getTransNodePosition().left);
                        g.set(this.transparencyDiv, "display", "block")
                    },
                    hideTransNode: function(){
                        g.set(this.transparencyDiv, "display", "none")
                    },
                    _createTransparencyWidget: function(){
                        this.transHorizSlider = new a({
                            minimum: 0,
                            maximum: 1,
                            intermediateChanges: !0
                        }, this.transparencyBody);
                        this.own(this.transHorizSlider.on("change", r.hitch(this, function(a){
                            this.emit("onMenuClick", {
                                key: "transparencyChanged"
                            }, {
                                newTransValue: a
                            })
                        })));
                        new b({
                            container: "bottomDecoration"
                        }, this.transparencyRule)
                    }
                })
            })
        },
        "jimu/dijit/DropMenu": function(){
            define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Evented ../utils".split(" "), function(u, w, c, r, h, d, s, l){
                return u([w, s], {
                    baseClass: "jimu-dropmenu",
                    declaredClass: "jimu.dijit.DropMenu",
                    constructor: function(){
                        this.state = "closed"
                    },
                    postCreate: function(){
                        this.btnNode = h.create("div", {
                            "class": "jimu-icon-btn"
                        }, this.domNode);
                        this.own(d(this.btnNode, "click", c.hitch(this, this._onBtnClick)));
                        this.box || (this.box = this.domNode.parentNode);
                        this.own(d(this.box, "click", c.hitch(this, function(){
                            this.dropMenuNode && this.closeDropMenu()
                        })))
                    },
                    _onBtnClick: function(c){
                        c.stopPropagation();
                        this.dropMenuNode || this._createDropMenuNode();
                        "closed" === this.state ? this.openDropMenu() : this.closeDropMenu()
                    },
                    _createDropMenuNode: function(){
                        this.dropMenuNode = h.create("div", {
                            "class": "drop-menu",
                            style: {
                                display: "none"
                            }
                        }, this.domNode);
                        this.items || (this.items = []);
                        r.forEach(this.items, function(q){
                            var a;
                            q.key && "separator" === q.key ? h.create("hr", {
                                "class": "menu-item-line"
                            }, this.dropMenuNode) : q.key && (a = h.create("div", {
                                "class": "menu-item",
                                itemId: q.key,
                                innerHTML: q.label
                            }, this.dropMenuNode), this.own(d(a, "click", c.hitch(this, function(){
                                this.selectItem(q)
                            }))))
                        }, this)
                    },
                    _getDropMenuPosition: function(){
                        var c = h.getContentBox(this.box), a = h.getMarginBox(this.domNode), b = h.getMarginBox(this.btnNode), d = h.getMarginBox(this.dropMenuNode), g = {}, n, m;
                        g.l = a.l;
                        g.t = a.t + b.h;
                        g.t + d.h > c.h && (m = a.t, n = c.h - a.t - b.h, n = Math.max(m, n), n === m && (g.t = 0 - d.h));
                        g.l + d.w > c.w && (d = a.l, c = c.w - a.l - b.w, n = Math.max(d, c), n === d && (g.l = "", g.r = 0));
                        g.left = g.l;
                        g.top = g.t;
                        g.right = g.r;
                        return g
                    },
                    selectItem: function(c){
                        this.closeDropMenu();
                        this.emit("onMenuClick", c)
                    },
                    openDropMenu: function(){
                        this.state = "opened";
                        h.setStyle(this.dropMenuNode, "display", "");
                        h.setStyle(this.dropMenuNode, l.getPositionStyle(this._getDropMenuPosition()));
                        this.emit("onOpenMenu")
                    },
                    closeDropMenu: function(){
                        this.state = "closed";
                        h.setStyle(this.dropMenuNode, "display", "none");
                        this.emit("onCloseMenu")
                    }
                })
            })
        },
        "widgets/LayerList/NlsStrings": function(){
            define([], function(){
                return {
                    value: null
                }
            })
        },
        "widgets/LayerList/PopupMenuInfo": function(){
            define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/promise/all jimu/portalUrlUtils jimu/WidgetManager ./NlsStrings".split(" "), function(u, w, c, r, h, d, s, l){
                var q = u([], {
                    _candidateMenuItems: null,
                    _displayItems: null,
                    _layerInfo: null,
                    _layerType: null,
                    _appConfig: null,
                    constructor: function(a, b, c, d){
                        this.nls = l.value;
                        this._layerInfo = a;
                        this._layerType = c;
                        this._appConfig = d;
                        this._initCandidateMenuItems();
                        this._initDisplayItems(b)
                    },
                    _getATagLabel: function(){
                        var a, b;
                        (a = this._layerInfo._isItemLayer && this._layerInfo._isItemLayer()) ? (a = d.getItemDetailsPageUrl(d.getStandardPortalUrl(this._appConfig.portalUrl), a), b = this.nls.itemShowItemDetails) : this._layerInfo.layerObject && this._layerInfo.layerObject.url &&
                        ("CSVLayer" === this._layerType ||
                        "KMLLayer" ===
                        this._layerType) ? (a = this._layerInfo.layerObject.url, b = this.nls.itemDownload) : (a = this._layerInfo.layerObject && this._layerInfo.layerObject.url ? this._layerInfo.layerObject.url : "", b = this.nls.itemDesc);
                        return '\x3ca class\x3d"menu-item-description" target\x3d"_blank" href\x3d"' + a + '"\x3e' + b + "\x3c/a\x3e"
                    },
                    //exp start
                    _getMetaLabel: function() {                    
                        
                        var href = location.href.split('/');
                        var host = href[0];
                        var server = href[2];
                        var app = href[3];
                        var url = host + '//' + server + '/';
                        var fcPath = [];
                        
                        if (this._layerInfo.isRootLayer() != true && this._layerInfo.parentLayerInfo.isRootLayer() != true) {   
                            
                            var parentID = this._layerInfo.parentLayerInfo.id;
                            fcPath.unshift(this._layerInfo.title);
                            
                            var pLayer = this._layerInfo.parentLayerInfo;
                            do {
                                fcPath.unshift(pLayer.title);
                                pLayer = pLayer.parentLayerInfo;
                            }
                            while (pLayer.isRootLayer() === false);
       
                            var fcPathUrl;
                            var inum = 0;
                            fcPath.forEach(function(item){
                                if (inum === 0) {
                                    fcPathUrl = item;
                                }
                                else {
                                    fcPathUrl = fcPathUrl + 'xyz' + item;
                                }
                                inum = inum + 1;
                                
                            });
                            
                            fcPathUrl = fcPathUrl.replace(/&/gi, "zzz");
                            
                            return '<a class="menu-item-description" target="_blank" href="' + url + 'viewmetadata/?FC=' + fcPathUrl + '&Proj=' + app + '&Cfg=' + app + '">Metadata</a>';
                             
                        }
                        else{
                            fcPathUrl = this._layerInfo.title.replace(/&/gi, "zzz");
                            return '<a class="menu-item-description" target="_blank" href="' + url + 'viewmetadata/?FC=' + fcPathUrl + '&Proj=' + app + '&Cfg=' + app + '">Metadata</a>';

                        };
                    },
                    //exp end
                    _initCandidateMenuItems: function(){
                        this._candidateMenuItems = [{
                            key: "separator",
                            label: ""
                        }, {
                            key: "empty",
                            label: this.nls.empty
                        }, {
                            key: "zoomto",
                            label: this.nls.itemZoomTo
                        }, {
                            key: "transparency",
                            label: this.nls.itemTransparency
                        }, {
                            key: "moveup",
                            label: this.nls.itemMoveUp
                        }, {
                            key: "movedown",
                            label: this.nls.itemMoveDown
                        }, {
                            key: "table",
                            label: this.nls.itemToAttributeTable
                        }, {
                            key: "controlPopup",
                            label: this.nls.removePopup
                        }, {
                            key: "url",
                            label: this._getATagLabel()
                        }, {
                            key: "meta",
                            label: this._getMetaLabel()
                        }]
                    },
                    _initDisplayItems: function(a){
                        this._displayItems = [];
                        w.forEach(a, function(a){
                            w.forEach(this._candidateMenuItems, function(d){
                                a.key === d.key && (this._displayItems.push(c.clone(d)), a.onClick && (this._displayItem.onClick = a.onClick))
                            }, this)
                        }, this)
                    },
                    getDeniedItems: function(){
                        var a = new r, b = [];
                        this._layerInfo.isFirst ? b.push("moveup") : this._layerInfo.isLast && b.push("movedown");
                        (!this._layerInfo.layerObject || !this._layerInfo.layerObject.url) && b.push("url");
                        var d = this._layerInfo.loadInfoTemplate(), g = this._layerInfo.getSupportTableInfo();
                        h({
                            infoTemplate: d,
                            supportTableInfo: g
                        }).then(c.hitch(this._layerInfo, function(c){
                            c.infoTemplate || b.push("controlPopup");
                            c = c.supportTableInfo;
                            var d = s.getInstance().getWidgetsByName("AttributeTable");
                            (!(0 < d.length && d[0].visible) || !c.isSupportedLayer || !c.isSupportQuery) &&
                            b.push("table");
                            a.resolve(b)
                        }), function(){
                            a.resolve(b)
                        });
                        return a
                    },
                    getDisplayItems: function(){
                        return this._displayItems
                    },
                    onPopupMenuClick: function(a){
                        var b = {
                            closeMenu: !0
                        };
                        switch (a.itemKey) {
                            case "zoomto":
                                this._onItemZoomToClick(a);
                                break;
                            case "moveup":
                                this._onMoveUpItemClick(a);
                                break;
                            case "movedown":
                                this._onMoveDownItemClick(a);
                                break;
                            case "table":
                                this._onTableItemClick(a);
                                break;
                            case "transparencyChanged":
                                this._onTransparencyChanged(a);
                                b.closeMenu = !1;
                                break;
                            case "controlPopup":
                                this._onControlPopup()
                        }
                        return b
                    },
                    _onItemZoomToClick: function(a){
                        this._layerInfo.getExtent().then(c.hitch(this, function(a){
                            this._layerInfo.map.setExtent(a[0])
                        }))
                    },
                    _onMoveUpItemClick: function(a){
                        this._layerInfo.isFirst || a.layerListView.moveUpLayer(this._layerInfo.id)
                    },
                    _onMoveDownItemClick: function(a){
                        this._layerInfo.isLast || a.layerListView.moveDownLayer(this._layerInfo.id)
                    },
                    _onTableItemClick: function(a){
                        this._layerInfo.getLayerType().then(c.hitch(this, function(b){
                            0 <= this._layerInfo._getLayerTypesOfSupportTable().indexOf(b) &&
                            a.layerListWidget.publishData({
                                target: "AttributeTable",
                                layer: this._layerInfo
                            })
                        }))
                    },
                    _onTransparencyChanged: function(a){
                        this._layerInfo.setOpacity(1 - a.extraData.newTransValue)
                    },
                    _onControlPopup: function(a){
                        this._layerInfo.controlPopupInfo.enablePopup ? this._layerInfo.disablePopup() : this._layerInfo.enablePopup();
                        this._layerInfo.map.infoWindow.hide()
                    }
                });
                q.create = function(a, b){
                    var d = new r, g = a.isRootLayer(), h = {
                        RootLayer: [{
                            key: "zoomto"
                        }, {
                            key: "transparency"
                        }, {
                            key: "separator"
                        }, {
                            key: "moveup"
                        }, {
                            key: "movedown"
                        }, {
                            key: "separator"
                        }, {
                            key: "url"
                        }],
                        RootLayerAndFeatureLayer: [{
                            key: "zoomto"
                        }, {
                            key: "transparency"
                        }, {
                            key: "separator"
                        }, {
                            key: "controlPopup"
                        }, {
                            key: "separator"
                        }, {
                            key: "moveup"
                        }, {
                            key: "movedown"
                        }, {
                            key: "separator"
                        }, {
                            key: "table"
                        }, {
                            key: "separator"
                        }, {
                            key: "url"
                        }],
                        FeatureLayer: [{
                            key: "controlPopup"
                        }, {
                            key: "separator"
                        }, {
                            key: "table"
                        }, {
                            key: "separator"
                        }, {
                            key: "url"
                        }, {
                            key: "meta"
                        }],
                        GroupLayer: [{
                            key: "url"
                        }],
                        Table: [{
                            key: "table"
                        }, {
                            key: "separator"
                        }, {
                            key: "url"
                        }],
                        "default": [{
                            key: "url",
                            onClick: null
                        }]
                    };
                    a.getLayerType().then(c.hitch(this, function(c){
                        var l = "", l = g &&
                        ("FeatureLayer" === c || "CSVLayer" === c ||
                        "ArcGISImageServiceLayer" ===
                        c) ? "RootLayerAndFeatureLayer" : g ? "RootLayer" : "FeatureLayer" === c || "CSVLayer" === c ? "FeatureLayer" : "GroupLayer" === c ? "GroupLayer" : "Table" === c ? "Table" : "default";
                        d.resolve(new q(a, h[l], c, b))
                    }), c.hitch(this, function(){
                        d.resolve(new q(a, [{
                            key: "empty"
                        }]))
                    }));
                    return d
                };
                return q
            })
        },
        "widgets/LayerList/_build-generate_module": function(){
            define(["dojo/text!./Widget.html", "dojo/text!./css/style.css", "dojo/i18n!./nls/strings", "dojo/text!./config.json"], function(){
            })
        },
        "url:widgets/LayerList/PopupMenu.html": '\x3cdiv\x3e\r\n  \x3cdiv class\x3d"popup-menu-transparency-body" data-dojo-attach-point\x3d"transparencyDiv" data-dojo-attach-event\x3d"onclick:_onTransparencyDivClick" \x3e\r\n    \x3cdiv class\x3d"label"\x3e\r\n      \x3cdiv class\x3d"label-left jimu-float-leading"\x3e${nls.itemOpaque}\x3c/div\x3e\r\n      \x3cdiv class\x3d"label-right jimu-float-trailing"\x3e${nls.itemTransparent}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"transparencyBody"\x3e \r\n      \x3col data-dojo-attach-point\x3d"transparencyRule" class\x3d"transparency-rule"\x3e \x3c/ol\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3cdiv\x3e\r\n',
        "url:widgets/LayerList/LayerListView.html": '\r\n\r\n\x3ctable class\x3d"layer-list-table"\x3e\r\n  \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"layerListTable"\x3e\x3c/tbody\x3e\r\n  \x3ctbody class\x3d"layers-list-body" data-dojo-attach-point\x3d"tableListTable"\x3e\x3c/tbody\x3e       \r\n\x3c/table\x3e\r\n',
        "url:widgets/LayerList/Widget.html": '\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layers-section" data-dojo-attach-point\x3d"layersSection"\x3e\r\n    \x3cdiv class\x3d" layer-list-title"\x3e${nls.titleLayers}\x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-list-body" data-dojo-attach-point\x3d"layerListBody"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
        "url:widgets/LayerList/css/style.css": ".jimu-widget-layerList{position: relative;}.jimu-widget-layerList .jimu-hr{margin-top: 15px;}.jimu-widget-layerList .layers-section{margin-top: 0px;}.jimu-widget-layerList .layers-section .layers-list{width: 100%;}.jimu-widget-layerList .layers-section .layer-list-title{height: 16px; font-size: 14px; color: #86909c; margin-top: 14px;}.jimu-widget-layerList .layer-list-body {}.jimu-widget-layerList .layer-list-table{width: 100%; border-spacing: 0px;}.jimu-widget-layerList .layers-list-body{border: 0px solid #999;}.jimu-widget-layerList .jimu-widget-row{}.jimu-widget-layerList .layer-row{background-color: #ffffff; height: 40px;}.jimu-widget-layerList .layer-row-mouseover{background-color: #e3ecf2;}.jimu-widget-layerList .jimu-widget-row-selected{background-color: #d9dde0;;}.jimu-widget-layerList .jimu-widget-row-active{background-color: #009cff;}.jimu-widget-layerList .jimu-widget-row-selected .col-layer-label{color: #333;}.jimu-widget-layerList .jimu-widget-row-active .col-layer-label{color: #fff;}.jimu-widget-layerList .col{border: 0px solid; border-bottom: 0px solid #ffffff;}.jimu-widget-layerList .col1{}.jimu-widget-layerList .col2{width: auto; word-break: break-word; cursor: pointer;}.jimu-widget-layerList .col3{width: 24px;}.jimu-widget-layerList .begin-blank-div{width: 12px; height: 2px;}.jimu-widget-layerList .col-showLegend{width: 17px; text-align: center;}.jimu-widget-layerList .showLegend-div{width: 13px; height: 13px; cursor: pointer; font-size: 2px;}.jimu-widget-layerList .showLegend-image{margin-top: 4px; font-size: 3px;}.jimu-widget-layerList .layers-list-imageShowLegend-down{-moz-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -webkit-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -o-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); -ms-transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg); transform: scale(1) rotate(270deg) translateX(0px) translateY(0px) skewX(0deg) skewY(0deg);}.jimu-widget-layerList .layers-list-imageShowLegend-down-div{background-color: #d9dde0;}.jimu-widget-layerList .noLegend-div{width: 33px; text-align: right; display: none;}.jimu-widget-layerList .noLegend-image{display: block; margin: 0 auto;}.jimu-widget-layerList .col-blank{width:17px;}.jimu-widget-layerList .col-select{width: 17px;}.jimu-widget-layerList .col-reserve-blank{width: 25px;}.jimu-widget-layerList .col-content{color: #686868; font-size: 12px;}.jimu-widget-layerList .div-select{position: relative; font-size: 2px;}.jimu-widget-layerList .div-select .checkbox{cursor: auto;}.jimu-widget-layerList .div-content{position: relative; color: #686868; font-size: 12px; border: 0px solid;}.jimu-widget-layerList .col-popupMenu{width: 17px; text-align: center;}.jimu-widget-layerList .col-select .jimu-selection-box{margin-top: 5px;}.jimu-widget-layerList .layers-list-body .col-layer-label{color: #686868;}.jimu-widget-layerList .layer-sub-node{display: none; width:100%; border-spacing: 0px;}.jimu-widget-layerList .legend-node-td{}.jimu-widget-layerList .legend-div{overflow: hidden; font-size: 11px;}.jimu-widget-layerList .legend-symbol{}.jimu-widget-layerList .legend-label{margin-top: 17px; color: #686868; font-size: 11px;}.jimu-widget-layerList .layers-list-popupMenu-div{position: relative; width: 16px; height: 40px; cursor: pointer; border-radius: 2px; float: right; padding-top: 14px;}.jimu-widget-layerList .layers-list-popupMenu-div .jimu-loading{width: 20px; height: 20px; margin-top: -11px; margin-left: -11px;}.jimu-rtl .jimu-widget-layerList .layers-list-popupMenu-div .jimu-loading{margin-right: -11px;}.jimu-widget-layerList .layers-list-popupMenu-div-selected{width: 13px; height: 13px; background-color: #ffffff; border-radius: 2px;}.jimu-widget-layerList .layers-list-popupMenu-image{position: absolute; top: 5px; left: 3px;}.jimu-widget-layerList .popup-menu-transparency-body {position: absolute; background-color: #d9dde0; outline-color:#ffffff; outline-style:solid; outline-width:1px; width:184px; height:50px; padding-left: 2%; padding-right: 2%; color: #686868; z-index: 2; font-size: 12px; display: none;}.jimu-widget-layerList .popup-menu-transparency-body .transparency-rule{}.jimu-widget-layerList .popup-menu-transparency-body .label {overflow: hidden; margin-top: 2px; margin-bottom: 1px;}.jimu-widget-layerList .jimu-dropmenu .jimu-icon-btn{width: 13px; height: 13px; min-height: 13px; min-width: 13px; border-radius: 2px;}.jimu-widget-layerList .jimu-dropmenu .jimu-icon-btn-selected{background-color: #ffffff; border: 1px solid #ffffff;}.jimu-widget-layerList .jimu-dropmenu .drop-menu{outline-color:#ffffff; outline-style:solid; outline-width:1px; overflow:auto; color: #686868; font-size: 12px; z-index: 2; min-width: 119px; right: 0px;}.jimu-rtl .jimu-widget-layerList .jimu-dropmenu .drop-menu{left: 0px;}.jimu-widget-layerList .jimu-dropmenu .menu-item{line-height: 25px; white-space: nowrap;}.jimu-widget-layerList .jimu-dropmenu .menu-item-dissable{color:#c1c1c1;}.jimu-widget-layerList .legends-loading-img{width: 30px; height: 30px;}.jimu-widget-layerList .jimu-dropmenu .menu-item .menu-item-description{text-decoration: none; color: inherit; display: block;}",
        "url:widgets/LayerList/config.json": '{\r\n  "showLegend": true\r\n}\r\n',
        "*now": function(u){
            u(['dojo/i18n!*preload*widgets/LayerList/nls/Widget*["ar","cs","da","de","en","el","es","et","fi","fr","he","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sv","th","tr","zh-cn","vi","ROOT"]'])
        }
    }
});
define("jimu/BaseWidget dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-geometry dojo/dom dojo/on dojo/_base/unload dojo/aspect dojo/query jimu/dijit/Selectionbox ./LayerListView ./PopupMenu dojo/dom-style ./NlsStrings jimu/LayerInfos/LayerInfoFactory jimu/LayerInfos/LayerInfos dojo/promise/all".split(" "), function(u, w, c, r, h, d, s, l, q, a, b, x, g, n, m, t, y, e, p){
    return w([u], {
        baseClass: "jimu-widget-layerList",
        name: "layerList",
        layerListView: null,
        operLayerInfos: null,
        startup: function(){
            t.value = this.nls;
            if (this.map.itemId) 
                e.getInstance(this.map, this.map.itemInfo).then(c.hitch(this, function(a){
                    this.operLayerInfos = a;
                    this.showLayers();
                    this.own(l(this.operLayerInfos, "layerInfosChanged", c.hitch(this, this._onLayerInfosChanged)));
                    s.setSelectable(this.layersSection, !1)
                }));
            else {
                var a = this._obtainMapLayers();
                e.getInstance(this.map, a).then(c.hitch(this, function(a){
                    this.operLayerInfos = a;
                    this.showLayers();
                    this.own(l(this.operLayerInfos, "layerInfosChanged", c.hitch(this, this._onLayerInfosChanged)));
                    s.setSelectable(this.layersSection, !1)
                }))
            }
        },
        destroy: function(){
            this._clearLayers();
            this.inherited(arguments)
        },
        _obtainMapLayers: function(){
            var a = [], b = [], c = {
                itemData: {
                    baseMap: {
                        baseMapLayers: []
                    },
                    operationalLayers: []
                }
            };
            r.forEach(this.map.graphicsLayerIds, function(a){
                a = this.map.getLayer(a);
                a.isOperationalLayer && b.push({
                    layerObject: a,
                    title: a.label || a.title || a.name || a.id || " ",
                    id: a.id || " "
                })
            }, this);
            r.forEach(this.map.layerIds, function(c){
                c = this.map.getLayer(c);
                c.isOperationalLayer ? b.push({
                    layerObject: c,
                    title: c.label || c.title || c.name || c.id ||
                    " ",
                    id: c.id || " "
                }) : a.push({
                    layerObject: c,
                    id: c.id || " "
                })
            }, this);
            c.itemData.baseMap.baseMapLayers = a;
            c.itemData.operationalLayers = b;
            return c
        },
        _layerFilter: function(a, b, c){
            a = this.map.getLayer(a);
            a.isOperationalLayer ? c.push({
                layerObject: a,
                title: a.label || a.title || a.name || a.id || " ",
                id: a.id || " "
            }) : b.push({
                layerObject: a,
                id: a.id || " "
            })
        },
        showLayers: function(){
            this.layerListView = (new g({
                operLayerInfos: this.operLayerInfos,
                layerListWidget: this,
                config: this.config
            })).placeAt(this.layerListBody)
        },
        _createPopupMenu: function(){
            this.popupMenu = new n({
                layerListWidget: this
            });
            h.place(this.popupMenu.domNode, this.domNode)
        },
        _clearLayers: function(){
            this.layerListView && this.layerListView.destroyRecursive && this.layerListView.destroyRecursive()
        },
        flag: !0,
        bindEvents: function(){
            var a;
            this.own(l(this.map, "layer-add-result", c.hitch(this, this._onLayersChange)));
            a = l(this.map, "layer-remove", c.hitch(this, this._onLayersChange));
            this.own(a);
            q.addOnUnload(function(){
                a.remove();
                (void 0).remove()
            })
        },
        _onLayersChange: function(a){
            "esri.layers.GraphicsLayer" !== a.layer.declaredClass &&
            (this.operLayerInfos.update(), this._clearLayers(), this.showLayers())
        },
        _onLayerInfosChanged: function(a, b){
            this._clearLayers();
            this.showLayers()
        }
    })
});
