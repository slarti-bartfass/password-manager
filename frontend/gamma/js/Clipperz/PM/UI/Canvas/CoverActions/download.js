/*

Copyright 2008-2011 Clipperz Srl

This file is part of Clipperz Community Edition.
Clipperz Community Edition is an online password manager.
For further information about its features and functionalities please
refer to http://www.clipperz.com.

* Clipperz Community Edition is free software: you can redistribute
  it and/or modify it under the terms of the GNU Affero General Public
  License as published by the Free Software Foundation, either version
  3 of the License, or (at your option) any later version.

* Clipperz Community Edition is distributed in the hope that it will
  be useful, but WITHOUT ANY WARRANTY; without even the implied
  warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
  See the GNU Affero General Public License for more details.

* You should have received a copy of the GNU Affero General Public
  License along with Clipperz Community Edition.  If not, see
  <http://www.gnu.org/licenses/>.

*/

//
//	download.js
//	Download
//
//	Created by Giulio Cesare Solaroli on 3/15/10
//	Copyright 2010 Clipperz
//	This code was generated by Opacity. You may use or modify it in any way.
//

var kClipperz_PM_UI_Canvas_CoverActions_downloadWidth = 46.0;
var kClipperz_PM_UI_Canvas_CoverActions_downloadHeight = 46.0;

function Clipperz_PM_UI_Canvas_CoverActions_download(canvas, aColor, aFillColor, aThickness)
{
	var context = canvas.getContext("2d");
	var alignStroke;
	var resolution;
	var stroke;
	var path;
	var pointX;
	var pointY;
	if (window.devicePixelRatio)
		resolution = window.devicePixelRatio;
	else
		resolution = 1.0;
	resolution *= 0.5 * (canvas.width / kClipperz_PM_UI_Canvas_CoverActions_downloadWidth + canvas.height / kClipperz_PM_UI_Canvas_CoverActions_downloadHeight);
	
	context.save();
	context.scale(canvas.width / kClipperz_PM_UI_Canvas_CoverActions_downloadWidth, canvas.height / kClipperz_PM_UI_Canvas_CoverActions_downloadHeight);
	context.clearRect(0.0, 0.0, kClipperz_PM_UI_Canvas_CoverActions_downloadWidth, kClipperz_PM_UI_Canvas_CoverActions_downloadHeight);
	
	// arrow
	
	stroke = aThickness;
	stroke *= resolution;
	if (stroke < 1.0)
		stroke = Math.ceil(stroke);
	else
		stroke = Math.round(stroke);
	stroke /= resolution;
	alignStroke = (0.5 * stroke * resolution) % 1.0;
	context.beginPath();
	pointX = 16.5;
	pointY = 22.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.moveTo(pointX, pointY);
	pointX = 19.5;
	pointY = 8.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 30.038;
	pointY = 10.605;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 27.354;
	pointY = 24.354;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 33.28;
	pointY = 25.293;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 19.81;
	pointY = 36.828;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 10.07;
	pointY = 21.617;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	pointX = 16.5;
	pointY = 22.5;
	pointX = (Math.round(resolution * pointX + alignStroke) - alignStroke) / resolution;
	pointY = (Math.round(resolution * pointY + alignStroke) - alignStroke) / resolution;
	context.lineTo(pointX, pointY);
	context.closePath();
	context.fillStyle = aFillColor;
	context.fill();
	context.strokeStyle = aColor;
	context.lineWidth = stroke;
	context.lineCap = "square";
	context.stroke();
	
	context.restore();
}
