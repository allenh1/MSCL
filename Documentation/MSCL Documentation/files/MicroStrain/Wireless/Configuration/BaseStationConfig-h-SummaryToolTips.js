NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/Configuration/BaseStationConfig.h",{4295:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4295\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationConfig</div></div></div><div class=\"TTSummary\">Class used for setting the configuration of BaseStations.&nbsp; Set all the configuration values that you want to change, then verify and apply them to a BaseStation.</div></div>",4297:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4297\" class=\"NDPrototype NoParameterForm\">BaseStationConfig()</div><div class=\"TTSummary\">Creates a blank BaseStationConfig.</div></div>",4299:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4299\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;WirelessTypes::TransmitPower&gt; m_transmitPower</div><div class=\"TTSummary\">The WirelessTypes::TransmitPower to set.</div></div>",4300:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4300\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;WirelessTypes::CommProtocol&gt; m_commProtocol</div><div class=\"TTSummary\">The WirelessTypes::CommProtocol to set.</div></div>",4301:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4301\" class=\"NDPrototype NoParameterForm\">ButtonMap m_btnsLongPress</div><div class=\"TTSummary\">The &lt;ButtonMap&gt; for long press actions.</div></div>",4302:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4302\" class=\"NDPrototype NoParameterForm\">ButtonMap m_btnsShortPress</div><div class=\"TTSummary\">The &lt;ButtonMap&gt; for short press actions.</div></div>",4303:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4303\" class=\"NDPrototype NoParameterForm\">AnalogPairMap m_analogPairs</div><div class=\"TTSummary\">The &lt;AnalogPairMap&gt; holding all analog pairs to set</div></div>",4304:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4304\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">bool</span>&gt; m_analogPairingEnable</div><div class=\"TTSummary\">The analog pairing enable master option to set.</div></div>",4305:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4305\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">uint16</span>&gt; m_analogTimeoutTime</div><div class=\"TTSummary\">The analog timeout time (in seconds) to set.</div></div>",4306:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4306\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">float</span>&gt; m_analogTimeoutVoltage</div><div class=\"TTSummary\">The analog timeout voltage to set.</div></div>",4307:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype4307\" class=\"NDPrototype NoParameterForm\">boost::optional&lt;<span class=\"SHKeyword\">bool</span>&gt; m_analogExceedanceEnable</div><div class=\"TTSummary\">The analog exceedance enable option to set.</div></div>",4309:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4309\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">void</span> checkValue(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> boost::</td><td class=\"PType\">optional&lt;T&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">opt,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">valueName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Throws an exception if an optional value isn\'t set.</div></div>",4310:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4310\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">template</span>&lt;typename T&gt; <span class=\"SHKeyword\">bool</span> isSet(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> boost::</td><td class=\"PType\">optional&lt;T&gt;&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">opt</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the optional value is set.</div></div>",4311:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4311\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::TransmitPower curTransmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationEepromHelper&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">eeprom</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the transmit power currently set, or from the node if not set.</div></div>",4312:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4312\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::CommProtocol curCommProtocol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationEepromHelper&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">eeprom</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the communication protocol currently set, or from the base if not set.</div></div>",4313:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4313\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verify(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationFeatures&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">features,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationEepromHelper&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">eeprom,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the current settings are ok to be written to a given BaseStation.</div></div>",4314:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4314\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> apply(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationFeatures&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">features,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">BaseStationEepromHelper&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">eeprom</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Writes all of the configuration values that are set to a WirelessNode.</div></div>",4315:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4315\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower transmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::TransmitPower value in the Config, if set.</div></div>",4316:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4316\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> transmitPower(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">TransmitPower&nbsp;</td><td class=\"PName last\">power</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::TransmitPower value in the Config.</div></div>",4317:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4317\" class=\"NDPrototype NoParameterForm\">WirelessTypes::CommProtocol communicationProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::CommProtocol value in the Config, if set.</div></div>",4318:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4318\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> communicationProtocol(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">CommProtocol&nbsp;</td><td class=\"PName last\">commProtocol</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the WirelessTypes::CommProtocol value in the Config.</div></div>",4319:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4319\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton buttonLongPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the BaseStationButton value in the Config for performing a long press on a specific button, if set.</div></div>",4320:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4320\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> buttonLongPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationButton&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the BaseStationButton value in the Config for performing a short press on a specific button.</div></div>",4321:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4321\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton buttonShortPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the BaseStationButton value in the Config for performing a short press on a specific button, if set.</div></div>",4322:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4322\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> buttonShortPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td></td><td class=\"PName last\">buttonNumber,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationButton&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the BaseStationButton value in the Config for performing a long press on a specific button.</div></div>",4323:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4323\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> analogPairingEnable() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Analog Pairing Enabled value in the Config, if set.</div></div>",4324:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4324\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogPairingEnable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Pairing Enabled value in the Config.&nbsp; This controls whether all of the other analog pairing settings have any affect.</div></div>",4325:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4325\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> analogTimeoutTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Analog Timeout Time value (in seconds) in the Config, if set.&nbsp; If this is 0, Analog Timeout is disabled.</div></div>",4326:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4326\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogTimeoutTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">seconds</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Timeout Time value (in seconds) in the Config.&nbsp; If this is 0, Analog Timeout is disabled.</div></div>",4327:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4327\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> analogTimeoutVoltage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Analog Timeout Voltage in the Config, if set.</div></div>",4328:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4328\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogTimeoutVoltage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">voltage</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Timeout Voltage in the Config.&nbsp; If this is 0, Analog Timeout is disabled.</div></div>",4329:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4329\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> analogExceedanceEnable()</div><div class=\"TTSummary\">Gets the Analog Exceedance Enabled value in the Config, if set.</div></div>",4330:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4330\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> analogExceedanceEnable(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">enable</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the Analog Exceedance Enabled value in the Config.</div></div>",4331:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype4331\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationAnalogPair analogPairing(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">portNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the BaseStationAnalogPair value in the Config for the specified port number, if set.</div></div>",4332:"<div class=\"NDToolTip TFunction LC\"><div class=\"TTSummary\">Sets the BaseStationAnalogPair value in the Config for the specified port number.</div></div>"});