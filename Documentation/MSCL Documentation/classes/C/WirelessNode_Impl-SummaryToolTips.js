NDSummary.OnToolTipsLoaded("CClass:WirelessNode_Impl",{3493:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype3493\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode_Impl</div></div></div><div class=\"TTSummary\">Contains the implementation logic for a WirelessNode.&nbsp; Most WirelessNode commands call these commands.</div></div>",3495:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3495\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessNode_Impl(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td></td><td class=\"PName last\">nodeAddress,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a WirelessNode_Impl object.</div></div>",3497:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3497\" class=\"NDPrototype NoParameterForm\">NodeAddress m_address</div><div class=\"TTSummary\">The address of the Node.</div></div>",3498:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3498\" class=\"NDPrototype NoParameterForm\">BaseStation m_baseStation</div><div class=\"TTSummary\">The Node\'s parent BaseStation.</div></div>",3499:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3499\" class=\"NDPrototype NoParameterForm\">NodeEepromSettings m_eepromSettings</div><div class=\"TTSummary\">The eeprom settings to use for the NodeEeprom object.</div></div>",3500:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3500\" class=\"NDPrototype NoParameterForm\">mutable std::recursive_mutex m_protocolMutex</div><div class=\"TTSummary\">The mutex used when determining the device protocol.</div></div>",3501:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3501\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;WirelessProtocol&gt; m_protocol</div><div class=\"TTSummary\">The WirelessProtocol containing all of the protocol commands and info for this Node.</div></div>",3502:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3502\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeEeprom&gt; m_eeprom</div><div class=\"TTSummary\">The NodeEeprom that handles reading and writing eeprom values with the Node and eeprom cache.</div></div>",3503:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3503\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeEepromHelper&gt; m_eepromHelper</div><div class=\"TTSummary\">The NodeEepromHelper used for high level reads and writes on the Node.</div></div>",3504:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype3504\" class=\"NDPrototype NoParameterForm\">mutable std::unique_ptr&lt;NodeFeatures&gt; m_features</div><div class=\"TTSummary\">The NodeFeatures containing the features for this Node.</div></div>",3506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3506\" class=\"NDPrototype NoParameterForm\">std::unique_ptr&lt;WirelessProtocol&gt; determineProtocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Determines the WirelessProtocol to use based on the Node\'s firmware version.</div></div>",3507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3507\" class=\"NDPrototype NoParameterForm\">NodeEeprom&amp; eeprom() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeEeprom for this Node.</div></div>",3508:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3508\" class=\"NDPrototype NoParameterForm\">NodeEepromHelper&amp; eeHelper() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeEepromHelper for this Node.</div></div>",3509:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3509\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> NodeFeatures&amp; features() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the NodeFeatures for this Node.</div></div>",3510:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3510\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual const</span> WirelessProtocol&amp; protocol() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the WirelessProtocol for this Node.&nbsp; Note: This requires communicating to the Node if creating the protocol for the first time.</div></div>",3511:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3511\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the Node.</div></div>",3512:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3512\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the node\'s parent Base Station, which will perform all communication with the Node.</div></div>",3513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3513\" class=\"NDPrototype NoParameterForm\">BaseStation&amp; getBaseStation()</div><div class=\"TTSummary\">Gets a reference to the BaseStation that is assigned to this Node.</div></div>",3514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3514\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> hasBaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">basestation</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the given BaseStation is the same BaseStation that is assigned to this Node.</div></div>",3515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3515\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useGroupRead(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useGroup</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables or disables the use of group eeprom read when trying to read a single value (enabled by default).</div></div>",3516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3516\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> setReadWriteRetries(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numRetries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of retry attempts for reading and writing with the Node.</div></div>",3517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3517\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getReadWriteRetries() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of retry attempts for reading and writing config options with the Node.</div></div>",3518:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3518\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useEepromCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useCache</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether or not to utilize the eeprom cache when configuring this Node (default of enabled).</div></div>",3519:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3519\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearEepromCache()</div><div class=\"TTSummary\">Clears the eeprom cache for this Node.</div></div>",3520:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3520\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> nodeAddress() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the node address of the Node.</div></div>",3521:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3521\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency that the Node is believed to be on.&nbsp; If the frequency is unknown, it will be read from Eeprom.</div></div>",3522:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3522\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware Version of the Node.</div></div>",3523:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3523\" class=\"NDPrototype NoParameterForm\">WirelessModels::NodeModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessModels::NodeModel of the Node.</div></div>",3524:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3524\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the Node.</div></div>",3525:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3525\" class=\"NDPrototype NoParameterForm\">WirelessTypes::MicroControllerType microcontroller() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::MicroControllerType of the Node.</div></div>",3526:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3526\" class=\"NDPrototype NoParameterForm\">RadioFeatures radioFeatures() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the RadioFeatures of the Node.</div></div>",3527:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3527\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> dataStorageSize() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of bytes available for data storage on the Node.</div></div>",3528:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3528\" class=\"NDPrototype NoParameterForm\">WirelessTypes::RegionCode regionCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the region code currently set on the Node.</div></div>",3529:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3529\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verifyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the settings in the given WirelessNodeConfig are ok to be written to the Node.&nbsp; Options that are set will also be validated against each other. If an option that needs to be validated isn\'t currently set, it will be read from the Node.</div></div>",3530:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3530\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> applyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">WirelessNodeConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a WirelessNodeConfig to the Node.</div></div>",3531:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3531\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getNumDatalogSessions()</div><div class=\"TTSummary\">Reads the number of datalog sessions that are currently stored on the Node.</div></div>",3532:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3532\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> percentFull()</div><div class=\"TTSummary\">Gets the internal datalogging memory percentage that is currently stored on the Node.</div></div>",3533:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3533\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DefaultMode getDefaultMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::DefaultMode that is currently set on the Node.</div></div>",3534:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3534\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getInactivityTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the user inactivity timeout (in seconds) that is currently set on the Node.</div></div>",3535:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3535\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> getCheckRadioInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the check radio interval that is currently set on the Node.</div></div>",3536:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3536\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower getTransmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::TransmitPower that is currently set on the Node.</div></div>",3537:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3537\" class=\"NDPrototype NoParameterForm\">WirelessTypes::SamplingMode getSamplingMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::SamplingMode that is currently set on the Node.</div></div>",3538:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3538\" class=\"NDPrototype NoParameterForm\">ChannelMask getActiveChannels() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the ChannelMask currently set on the Node, representing which channels are enabled and disabled.</div></div>",3539:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3539\" class=\"NDPrototype NoParameterForm\">WirelessTypes::WirelessSampleRate getSampleRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::WirelessSampleRate currently set on the Node.</div></div>",3540:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3540\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> getNumSweeps() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of sweeps currently set on the Node, which affects the duration of sampling if unlimited duration is disabled, or the duration of each burst if the sampling mode is Sync Sampling Burst.</div></div>",3541:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3541\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getUnlimitedDuration() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets whether or not unlimited sampling duration is enabled on the Node.</div></div>",3542:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3542\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataFormat getDataFormat() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataFormat that is currently set on the Node.</div></div>",3543:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3543\" class=\"NDPrototype NoParameterForm\">WirelessTypes::DataCollectionMethod getDataCollectionMethod() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::DataCollectionMethod that is currently set on the Node, representing how the data will be collected.&nbsp; Note: this has no affect if the sampling mode is Armed Datalogging, as this mode only operates in &quot;log only&quot;.</div></div>",3544:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3544\" class=\"NDPrototype NoParameterForm\">TimeSpan getTimeBetweenBursts() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the amount of time between each burst currently set on the Node.</div></div>",3545:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3545\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getLostBeaconTimeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the lost beacon timeout, in minutes, currently set on the Node.</div></div>",3546:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3546\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::InputRange getInputRange(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the input range of the specified ChannelMask.</div></div>",3547:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3547\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> getHardwareOffset(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the hardware offset of the specified ChannelMask currently set on the Node.</div></div>",3548:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3548\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::Filter getAntiAliasingFilter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the Anti-Aliasing Filter of the specified ChannelMask currently set on the Node.</div></div>",3549:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3549\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::Filter getLowPassFilter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the Low-Pass Filter of the specified ChannelMask currently set on the Node.</div></div>",3550:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3550\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::HighPassFilter getHighPassFilter(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the High-Pass Filter of the specified ChannelMask currently set on the Node.</div></div>",3551:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3551\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">float</span> getGaugeFactor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the gauge factor of the specified ChannelMask currently set on the Node.</div></div>",3552:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3552\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">LinearEquation getLinearEquation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Gets the linear equation of the specified ChannelMask currently set on the Node.</div></div>",3553:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3553\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::CalCoef_Unit getUnit(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the unit of the specified ChannelMask currently set on the Node.</div></div>",3554:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3554\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::CalCoef_EquationType getEquationType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the WirelessTypes::CalCoef_EquationType of the specified ChannelMask currently set on the Node.</div></div>",3555:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3555\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::SettlingTime getFilterSettlingTime(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the filter settling time of the specified ChannelMask.</div></div>",3556:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3556\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">WirelessTypes::ThermocoupleType getThermocoupleType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the WirelessTypes::ThermocoupleType of the specified ChannelMask currently set on the Node.</div></div>",3557:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3557\" class=\"NDPrototype NoParameterForm\">FatigueOptions getFatigueOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the FatigueOptions currently set on the Node.</div></div>",3558:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3558\" class=\"NDPrototype NoParameterForm\">HistogramOptions getHistogramOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the HistogramOptions currently set on the Node.</div></div>",3559:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3559\" class=\"NDPrototype NoParameterForm\">ActivitySense getActivitySense() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the ActivitySense options currently set on the Node.</div></div>",3560:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3560\" class=\"NDPrototype NoParameterForm\">EventTriggerOptions getEventTriggerOptions() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the EventTriggerOptions currently set on the Node.</div></div>",3561:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3561\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getDiagnosticInterval() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the interval (in seconds) at which the diagnostic info is configured to be sent.</div></div>",3562:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3562\" class=\"NDPrototype NoParameterForm\">WirelessTypes::StorageLimitMode getStorageLimitMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Rates the WirelessTypes::StorageLimitMode that the Node is configured for.&nbsp; This determines what happens when the datalogging storage limit is reached on the Node.</div></div>",3563:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3563\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> getSensorDelay() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the sensor delay (in microseconds) that is currently set on the Node.</div></div>",3564:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3564\" class=\"NDPrototype NoParameterForm\">DataMode getDataMode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the DataMode that is currently set on the Node.</div></div>",3565:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3565\" class=\"NDPrototype NoParameterForm\">WirelessTypes::WirelessSampleRate getDerivedDataRate() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::WirelessSampleRate for all Derived Data Channels that is currently set on the Node.</div></div>",3566:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3566\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">ChannelMask getDerivedChannelMask(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">DerivedChannel&nbsp;</td><td class=\"PName last\">derivedChannel</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the ChannelMask for an individual WirelessTypes::DerivedChannel that is currently set on the Node.&nbsp; This represents which of the actual Node\'s channels are set to be mapped to derived channels.&nbsp; For example, if the mask for RMS has ch1 and ch3 active, ch1RMS and ch3RMS channels will be output.</div></div>",3567:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3567\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> quickPing()</div><div class=\"TTSummary\">Performs a Quick Ping (Short Ping) command on the Node.</div></div>",3568:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3568\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> PingResponse ping()</div><div class=\"TTSummary\">Performs a Long Ping command on the Node to check the communication between the Base Station and the Node.</div></div>",3569:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3569\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> sleep()</div><div class=\"TTSummary\">Puts the Node into a low power, sleep mode.&nbsp; This command attempts to ping the node before sending the sleep command, to verify communication.</div></div>",3570:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3570\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> cyclePower()</div><div class=\"TTSummary\">Cycles the power on the Node.&nbsp; Many configuration changes that are applied to the node do not take affect until the power is cycled.</div></div>",3571:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3571\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetRadio()</div><div class=\"TTSummary\">Resets the radio on the Node.</div></div>",3572:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3572\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> changeFrequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">frequency</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the radio frequency of the Node.</div></div>",3573:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3573\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual</span> SetToIdleStatus setToIdle()</div><div class=\"TTSummary\">Attempts to set the Node to the Idle state so that it can be communicated with (stops it sampling, wakes it up if asleep).</div></div>",3574:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3574\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> erase()</div><div class=\"TTSummary\">Erases all logged data on the Node.</div></div>",3575:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3575\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">virtual void</span> startNonSyncSampling()</div><div class=\"TTSummary\">Starts the Node in Non-Synchronized Sampling Mode.</div></div>",3576:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3576\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearHistogram()</div><div class=\"TTSummary\">Clears the Histogram on the Node.</div></div>",3577:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3577\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AutoBalanceResult autoBalance(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td></td><td class=\"PName last\">targetPercent</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Performs an Auto Balance command on a specified channel on the Node.</div></div>",3578:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3578\" class=\"NDPrototype NoParameterForm\">AutoCalResult_shmLink autoCal_shmLink()</div><div class=\"TTSummary\">Performs automatic calibration for the SHM-Link Wireless Node.</div></div>",3579:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3579\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">AutoShuntCalResult autoShuntCal(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ChannelMask&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">mask,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">ShuntCalCmdInfo&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">commandInfo</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Performs automatic shunt calibration for a specified ChannelMask on supported Nodes.</div></div>",3580:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3580\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a uint16 from the given eeprom location of the node. This may use a page download or a read eeprom command.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.</div></div>",3581:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3581\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Value readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a value from the given EepromLocation of the node. This may use a page download or a read eeprom command.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.</div></div>",3582:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3582\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes a uint16 to the given eeprom location of the node.&nbsp; If successful, the cache will be updated with the changed value as well.</div></div>",3583:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3583\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">EepromLocation&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">Value&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">val</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes a value to the given EepromLocation of the node.&nbsp; If successful, the cache will be updated with the changed value as well.</div></div>",3584:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype3584\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> getDiagnosticInfo(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ChannelData&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">result</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Performs an immediate request for the Node\'s Diagnostic Info.</div></div>"});