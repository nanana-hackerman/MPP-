/* MPP+ MultiplayerPiano.com WebExtension
Copyright (C) 2017  https://github.com/nanana-hackerman/

This program is free software; you can redistribute it and/or
modify it under the terms of the GNU General Public License
as published by the Free Software Foundation; either version 2
of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.*/

console.log('[MPP+] Loading')
var start = performance.now();

console.log('[MPP+] Spawning buttons');
console.log('[MPP+] jQuery version ' + $().jquery);

mppp_btn = $('<div id="mppp-btn" class="ugly-button">MPP+</div>');
mppp_btn.css('background', 'rgba(39, 239, 229, 0.65)');
mppp_btn.css('position', 'absolute');
mppp_btn.css('left', '660px');
mppp_btn.css('top', '32px');
mppp_btn.click(function() {
	if(!document.getElementById('Notification-MPP-Plus')) {
		html = '';
		//...
		html += '<div><h1>me cago en tu madre</h1></div>';
		html += '<div style="color: #000000">Created by nanana (error)</div>';
		html += '<div style="color: #000000">Available at <a href="https://github.com/nanana-hackerman/MPP-">https://github.com/nanana-hackerman/MPP-</a></div>';

		window.mpppNotification = new window.MPPNotification({"id": "MPP-Plus", "title": "MPP Plus - enjoy!", "duration": "-1", "html": html, "target": "#mppp-btn"});		
	} else {
		window.mpppNotification.close();
	}
});

$('#bottom').children().append(mppp_btn);

var end = performance.now();
console.log('[MPP+] Loaded (' + Math.ceil(end-start) + 'ms)');
