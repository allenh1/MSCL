NDContentPage.OnToolTipsLoaded({21:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype21\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Connection</div></div></div><div class=\"TTSummary\">The Connection object that is used for communication.</div></div>",393:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype393\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">SetToIdleStatus</div></div></div><div class=\"TTSummary\">Holds the status information of the Set to Idle command.</div></div>",406:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype406\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BeaconStatus</div></div></div><div class=\"TTSummary\">Represents the status of a BaseStation beacon.&nbsp; See also BaseStation::beaconStatus.</div></div>",574:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype574\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ConfigIssue</div></div></div><div class=\"TTSummary\">Holds information on a specific configuration issue.</div></div>",640:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype640\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationConfig</div></div></div><div class=\"TTSummary\">Class used for setting the configuration of BaseStations.&nbsp; Set all the configuration values that you want to change, then verify and apply them to a BaseStation.</div></div>",665:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype665\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a BaseStation.</div></div>",767:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of microcontrollers possible on the Wireless Devices.</div></div>",801:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the frequency (channel) that can be used for Wireless Devices.</div></div>",819:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the transmit powers that can be used for Wireless Devices.</div></div>",1167:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1167\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",1300:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The model numbers for each of the Wireless Base Stations</div></div>",1567:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1567\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeDiscovery</div></div></div><div class=\"TTSummary\">Represents 1 node discovery, which is created when a Wireless Node Discovery packet is sent from a Node.&nbsp; Note: There are multiple versions of Node Discovery packets which have been developed over time.&nbsp; Each version has added more useful information. If an earlier version of the Node Discovery packet is heard, this NodeDiscovery object will have some information be invalid (set to default values).</div></div>",1591:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1591\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataSweep</div></div></div><div class=\"TTSummary\">Represents 1 data sweep, including data for each channel, a timestamp, and a sample rate</div></div>",1647:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1647\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationButton</div></div></div><div class=\"TTSummary\">Represents a single button on a BaseStation</div></div>",1664:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1664\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationAnalogPair</div></div></div><div class=\"TTSummary\">Represents an Analog Pairing on a BaseStation.</div></div>",1720:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">75 ms&nbsp; - The default timeout for a base station command (in milliseconds)</div></div>",1722:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1722\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> BaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">connection,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName\">baseTimeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">BASE_COMMANDS_DEFAULT_TIMEOUT</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStation object.</div></div>",1723:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1723\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal basestation name that should be used for SensorCloud.</div></div>",1734:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1734\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the BaseStation.</div></div>",1755:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1755\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verifyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the settings in the given BaseStationConfig are ok to be written to the BaseStation.&nbsp; Options that are set will also be validated against each other. If an option that needs to be validated isn\'t currently set, it will be read from the BaseStation.</div></div>",1775:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1775\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Version</div></div></div><div class=\"TTSummary\">Class that represents, and provides helper functions for, a Version number</div></div>",1822:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1822\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Timestamp</div></div></div><div class=\"TTSummary\">Represents a date/time object</div></div>",1879:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1879\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",1882:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1882\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",1890:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1890\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Communication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a device.</div></div>",1897:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1897\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",1913:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1913\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidConfig</div></div></div><div class=\"TTSummary\">The Configuration is invalid.</div></div>"});