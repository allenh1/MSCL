NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Commands/BaseStation_ReadEeprom_v2.h",{2504:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2504\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStation_ReadEeprom_v2</div></div></div><div class=\"TTSummary\">Contains logic for the base station read eeprom command (v2).</div></div>",2506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2506\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> ByteStream buildCommand(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessPacket::</td><td class=\"PType\">AsppVersion&nbsp;</td><td class=\"PName last\">asppVer,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Builds the eeprom read command packet.</div></div>",2507:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2507\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Response</div></div></div><div class=\"TTSummary\">Handles the response to the base station read eeprom command.</div></div>",2509:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2509\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Response(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">weak_ptr&lt;ResponseCollector&gt;&nbsp;</td><td class=\"PName last\">collector</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a read eeprom Response object.</div></div>",2511:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2511\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_eepromAddress</div><div class=\"TTSummary\">The eeprom address to match in the response.</div></div>",2512:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2512\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_result</div><div class=\"TTSummary\">The result value of the read eeprom command.</div></div>",2513:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype2513\" class=\"NDPrototype NoParameterForm\">WirelessPacket::ResponseErrorCode m_errorCode</div><div class=\"TTSummary\">The WirelessPacket::ResponseErrorCode from the response.</div></div>",2515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2515\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> result() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the result value of the response.</div></div>",2516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2516\" class=\"NDPrototype NoParameterForm\">WirelessPacket::ResponseErrorCode errorCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessPacket::ResponseErrorCode from the response packet.</div></div>",2517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2517\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchSuccessResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the packet passed in matches the success response.</div></div>",2518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2518\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> matchFailResponse(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessPacket&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">packet</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div><div class=\"TTSummary\">Checks if the packet passed in matches the failure response.</div></div>"});