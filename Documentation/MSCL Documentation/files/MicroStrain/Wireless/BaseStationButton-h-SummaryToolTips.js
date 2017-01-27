NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/BaseStationButton.h",{4847:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4847\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationButton</div></div></div><div class=\"TTSummary\">Represents a single button on a BaseStation</div></div>",4849:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of commands that a BaseStationButton can perform.</div></div>",4859:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the user action that can be performed to cause a BaseStationButton to perform its command.</div></div>",4862:"<div class=\"NDToolTip TClass LC\"><div id=\"NDPrototype4862\" class=\"NDPrototype NoParameterForm\">BaseStationButton()</div><div class=\"TTSummary\">Creates a default constructed BaseStationButton object.</div></div>",4863:"<div class=\"NDToolTip TClass LC\"><div id=\"NDPrototype4863\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Command&nbsp;</td><td class=\"PName\">cmd,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">nodeAddress&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStationButton object.</div></div>",4865:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4865\" class=\"NDPrototype NoParameterForm\">Command m_command</div><div class=\"TTSummary\">The Command of the button.</div></div>",4866:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4866\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> m_nodeAddress</div><div class=\"TTSummary\">The node address that the button\'s function pertains to, if applicable.</div></div>",4868:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4868\" class=\"NDPrototype NoParameterForm\">BaseStationButton::Command command() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Command that is currently set in this object.</div></div>",4869:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4869\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> command(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Command&nbsp;</td><td class=\"PName last\">cmd</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Command of this BaseStationButton object.</div></div>",4870:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4870\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address that the button\'s command targets that is currently set in this object.&nbsp; This is ignored if the command doesn\'t pertain to a node.&nbsp; Note: To target all nodes on the frequency, set the node address to 65535.</div></div>",4871:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4871\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> nodeAddress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">address</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node address to target from the button\'s command.&nbsp; This is ignored if the command doesn\'t pertain to a node.&nbsp; Note: To target all nodes on the frequency, set the node address to 65535.</div></div>"});