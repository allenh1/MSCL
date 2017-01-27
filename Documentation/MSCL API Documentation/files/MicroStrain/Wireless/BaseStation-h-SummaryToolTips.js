NDSummary.OnToolTipsLoaded("File:MicroStrain/Wireless/BaseStation.h",{1718:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1718\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStation</div></div></div><div class=\"TTSummary\">Represents a MicroStrain Base Station object</div></div>",1722:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1722\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> BaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">connection,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName\">baseTimeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">BASE_COMMANDS_DEFAULT_TIMEOUT</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStation object.</div></div>",1723:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1723\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal basestation name that should be used for SensorCloud.</div></div>",1724:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1724\" class=\"NDPrototype NoParameterForm\">Connection&amp; connection()</div><div class=\"TTSummary\">Gets the Connection object that this BaseStation is using.</div></div>",1725:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1725\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> BaseStationFeatures&amp; features() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets a reference to the BaseStationFeatures for this BaseStation.&nbsp; Note: This will be invalid when the BaseStation is destroyed.</div></div>",1726:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1726\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">const</span> Timestamp&amp; lastCommunicationTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the Timestamp for the last time MSCL communicated with the BaseStation.&nbsp; Note: EEPROM reads using the cache, and data collection, will not update this timestamp.</div></div>",1727:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1727\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> readWriteRetries(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">numRetries</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the number of retry attempts for reading and writing config options on the BaseStation.&nbsp; By default, the number of retries is 0.&nbsp; Note:&nbsp; The timeout that is set per command will be per read and write attempt, meaning this retry number is multiplied by the timeout for your overall timeout.</div></div>",1728:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1728\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint8</span> readWriteRetries() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the number of retry attempts for reading and writing config options on the BaseStation.&nbsp; By default, the number of retries is 0.&nbsp; Note:&nbsp; The timeout that is set per command will be per read and write attempt, meaning this retry number is multiplied by the timeout for your overall timeout.</div></div>",1729:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1729\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> useEepromCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">useCache</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets whether or not to utilize the eeprom cache when configuring this BaseStation (enabled by default). This can be enabled/disabled at any time.&nbsp; It is highly recommended to have eeprom caching be enabled.&nbsp; Note:&nbsp; The eeprom cache stores the last known value that was written to / read from the BaseStation for each eeprom location. If this is enabled, any reads will get the last known value from the cache if it exists, and any writes will not write to the BaseStation if the value attempting to be written is the same as that stored in the cache. Caching of these values will still be performed if this is disabled, however, read and write operations will then always reach out to the actual device.</div></div>",1730:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1730\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> clearEepromCache()</div><div class=\"TTSummary\">Clears the eeprom cache for this BaseStation.</div></div>",1731:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1731\" class=\"NDPrototype NoParameterForm\">WirelessTypes::Frequency frequency() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the WirelessTypes::Frequency representing the radio frequency of this BaseStation.&nbsp; If the frequency is unknown, it will be read from the BaseStation.</div></div>",1732:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1732\" class=\"NDPrototype NoParameterForm\">Version firmwareVersion() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the firmware version of the BaseStation.</div></div>",1733:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1733\" class=\"NDPrototype NoParameterForm\">WirelessModels::BaseModel model() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the model of the BaseStation.</div></div>",1734:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1734\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the BaseStation.</div></div>",1735:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1735\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> name() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the name of the BaseStation. This is the universal basestation name that should be used for SensorCloud.&nbsp; This is the same as calling BaseStation::deviceName.</div></div>",1736:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1736\" class=\"NDPrototype NoParameterForm\">WirelessTypes::MicroControllerType microcontroller() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the microcontroller of the BaseStation.</div></div>",1737:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1737\" class=\"NDPrototype NoParameterForm\">WirelessTypes::RegionCode regionCode() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the region code currently set on the BaseStation.</div></div>",1738:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1738\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">DataSweeps getData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">timeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span>,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxSweeps&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Gets up to the requested amount of DataSweeps of sampled data that was collected by this BaseStation.</div></div>",1739:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1739\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint32</span> totalData()</div><div class=\"TTSummary\">Gets the number of DataSweeps that are currently in the data buffer.</div></div>",1740:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1740\" class=\"NDPrototype NoParameterForm\">NodeDiscoveries getNodeDiscoveries()</div><div class=\"TTSummary\">Gets the group of Node Discoveries that were collected by this base station.&nbsp; Calling this function clears out the Node Discovery buffer, so successively calling this will give you new Node Discoveries.</div></div>",1741:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1741\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> timeout(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td class=\"PName last\">timeout</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Sets the timeout to use when waiting for responses from commands.&nbsp; This timeout is used directly for BaseStation commands, while some additional time is added for Node commands.&nbsp; Note: Some commands have a minimum timeout that will override this if set lower than the minimum.</div></div>",1742:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1742\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint64</span> timeout() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the current timeout to use when waiting for responses from base station commands.&nbsp; This timeout is used directly for BaseStation commands, while some additional time is added for Node commands.&nbsp; Note: Some commands have a minimum timeout that will override this if set lower than the minimum.</div></div>",1743:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1743\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> ping()</div><div class=\"TTSummary\">Pings the base station</div></div>",1744:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1744\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">uint16</span> readEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads a specific EEPROM address on the Base Station.&nbsp; If the value stored in the eeprom cache is still valid, this will be returned instead.</div></div>",1745:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1745\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> writeEeprom(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">eepromAddress,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName last\">value</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Writes the specified value to a specific EEPROM address on the Base Station.&nbsp; If successful, the cache will be updated with the changed value as well.</div></div>",1746:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1746\" class=\"NDPrototype NoParameterForm\">Timestamp enableBeacon()</div><div class=\"TTSummary\">Enables the beacon on the base station using the system time (UTC) as its starting timestamp.</div></div>",1747:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1747\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">Timestamp enableBeacon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName last\">utcTime</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Enables the beacon on the base station using the given UTC timestamp.</div></div>",1748:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1748\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> disableBeacon()</div><div class=\"TTSummary\">Disables the beacon on the base station.</div></div>",1749:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1749\" class=\"NDPrototype NoParameterForm\">BeaconStatus beaconStatus()</div><div class=\"TTSummary\">Gets the BeaconStatus of the beacon on the base station.</div></div>",1750:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1750\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> startRfSweepMode(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">minFreq,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">maxFreq,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint32</span>&nbsp;</td><td class=\"PName\">interval,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint16</span>&nbsp;</td><td class=\"PName\">options</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHNumber\">0</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Starts the BaseStation in RF Sweep Mode.&nbsp; Note: To exit this Mode, send any command to the BaseStation (such as ping).</div></div>",1751:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1751\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> cyclePower()</div><div class=\"TTSummary\">Cycles the power on the base station.</div></div>",1752:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1752\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">void</span> resetRadio()</div><div class=\"TTSummary\">Resets the radio on the base station.</div></div>",1753:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1753\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> changeFrequency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">WirelessTypes::</td><td class=\"PType\">Frequency&nbsp;</td><td class=\"PName last\">frequency</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Changes the radio frequency of the base station.</div></div>",1754:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1754\" class=\"NDPrototype NoParameterForm\">mscl::SetToIdleStatus broadcastSetToIdle()</div><div class=\"TTSummary\">Broadcasts the Set to Idle command (will be heard by all nodes on the BaseStation\'s frequency).</div></div>",1755:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1755\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verifyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the settings in the given BaseStationConfig are ok to be written to the BaseStation.&nbsp; Options that are set will also be validated against each other. If an option that needs to be validated isn\'t currently set, it will be read from the BaseStation.</div></div>",1756:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1756\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> applyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Applies a BaseStationConfig to the Node.&nbsp; Note: This applies all options that have been set in the BaseStationConfig.&nbsp; Before applying, the options will be validated. It is recommended that you perform this validation yourself first by using verifyConfig.</div></div>",1757:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1757\" class=\"NDPrototype NoParameterForm\">WirelessTypes::TransmitPower getTransmitPower() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the WirelessTypes::TransmitPower that is currently set on the BaseStation.</div></div>",1758:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1758\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton getButtonLongPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the button settings for a long press action that are currently set on the BaseStation.</div></div>",1759:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1759\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationButton getButtonShortPress(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">buttonNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the button settings for a short press action that are currently set on the BaseStation.</div></div>",1760:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1760\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getAnalogPairingEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Pairing enabled/disabled setting that is currently set on the BaseStation.&nbsp; If this is disabled, all other analog pairing settings will be disabled.</div></div>",1761:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1761\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">uint16</span> getAnalogTimeoutTime() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Timeout Time in seconds that is currently set on the BaseStation.</div></div>",1762:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1762\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">float</span> getAnalogTimeoutVoltage() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Timeout Voltage that is currently set on the BaseStation.</div></div>",1763:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1763\" class=\"NDPrototype NoParameterForm\"><span class=\"SHKeyword\">bool</span> getAnalogExceedanceEnabled() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Reads the Analog Exceedance enabled/disabled setting that is currently set on the BaseStation.</div></div>",1764:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1764\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\">BaseStationAnalogPair getAnalogPair(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint8</span>&nbsp;</td><td class=\"PName last\">portNumber</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Reads the BaseStationAnalogPair for the specified port number that is currently set on the BaseStation.</div></div>"});