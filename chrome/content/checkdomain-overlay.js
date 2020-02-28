/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 2.0/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is Check Domain.
 *
 * The Initial Developer of the Original Code is
 * karakawa.
 * Portions created by the Initial Developer are Copyright (C) 2012
 * the Initial Developer. All Rights Reserved.
 *
 * This is a fork of Check Domain, which can run the 60.0.8 version of Firefox.
 *
 * Contributor(s):
 *   hayasa <hayasa@hayasa.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either the GNU General Public License Version 2 or later (the "GPL"), or
 * the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

if (!CheckDomainSendMessage) {
	var CheckDomainSendMessage = SendMessage;
	SendMessage = function() {
		if (!CheckDomain.check()) {
			return;
		}
		CheckDomainSendMessage.apply(this, arguments);
	};
}

if (!CheckDomainSendMessageWithCheck) {
	var CheckDomainSendMessageWithCheck = SendMessageWithCheck;
	SendMessageWithCheck = function() {
		if (!CheckDomain.check()) {
			return;
		}
		CheckDomainSendMessageWithCheck.apply(this, arguments);
	};
}

if (!CheckDomainSendMessageLater) {
	var CheckDomainSendMessageLater = SendMessageLater;
	SendMessageLater = function() {
		if (!CheckDomain.check()) {
			return;
		}
		CheckDomainSendMessageLater.apply(this, arguments);
	}
}
