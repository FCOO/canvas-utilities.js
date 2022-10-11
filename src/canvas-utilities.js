/****************************************************************************
	canvas-utilities.js,

	(c) 2022, FCOO

	https://github.com/FCOO/canvas-utilities
	https://github.com/FCOO

****************************************************************************/

(function ($, window/*, document, undefined*/) {
	"use strict";

    //Create fcoo-namespace
    var ns = window.canvas = window.canvas || {};


    /******************************************
    roundRect
    *******************************************/
    ns.roundRect = function(ctx, x, y, width, height, radius = 0, fill = false, stroke = true) {
        if (typeof radius === 'number')
            radius = {tl: radius, tr: radius, br: radius, bl: radius};
        else
            radius = $.extend({tl: 0, tr: 0, br: 0, bl: 0}, radius);

        ctx.beginPath();
        ctx.moveTo(x + radius.tl, y);
        ctx.lineTo(x + width - radius.tr, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
        ctx.lineTo(x + width, y + height - radius.br);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
        ctx.lineTo(x + radius.bl, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
        ctx.lineTo(x, y + radius.tl);
        ctx.quadraticCurveTo(x, y, x + radius.tl, y);
        ctx.closePath();
        if (fill)
            ctx.fill();
        if (stroke)
            ctx.stroke();
    };


    /******************************************
    Initialize/ready
    *******************************************/
    //$(function() {
    //}); //End of initialize/ready
    //******************************************


}(jQuery, this, document));