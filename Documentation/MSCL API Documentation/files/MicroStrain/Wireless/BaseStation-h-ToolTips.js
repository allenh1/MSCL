NDContentPage.OnToolTipsLoaded({4:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype4\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Connection</div></div></div><div class=\"TTSummary\">The Connection object that is used for communication.</div></div>",387:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype387\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BeaconStatus</div></div></div><div class=\"TTSummary\">Represents the status of a BaseStation beacon.&nbsp; See also BaseStation::beaconStatus.</div></div>",469:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype469\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ConfigIssue</div></div></div><div class=\"TTSummary\">Holds information on a specific configuration issue.</div></div>",546:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype546\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationConfig</div></div></div><div class=\"TTSummary\">Class used for setting the configuration of BaseStations.&nbsp; Set all the configuration values that you want to change, then verify and apply them to a BaseStation.</div></div>",603:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype603\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationFeatures</div></div></div><div class=\"TTSummary\">Contains information on which features are supported by a BaseStation.</div></div>",687:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the types of microcontrollers possible on the Wireless Devices.</div></div>",716:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the frequency (channel) that can be used for Wireless Devices.</div></div>",734:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">Represents the transmit powers that can be used for Wireless Devices.</div></div>",1043:"<div class=\"NDToolTip TEnumeration LC\"><div class=\"TTSummary\">The model numbers for each of the Wireless Base Stations</div></div>",1052:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1052\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">WirelessNode</div></div></div><div class=\"TTSummary\">A class representing a MicroStrain wireless node</div></div>",1300:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1300\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">NodeDiscovery</div></div></div><div class=\"TTSummary\">Represents 1 node discovery, which is created when a Wireless Node Discovery packet is sent from a Node.&nbsp; Note: There are multiple versions of Node Discovery packets which have been developed over time.&nbsp; Each version has added more useful information. If an earlier version of the Node Discovery packet is heard, this NodeDiscovery object will have some information be invalid (set to default values).</div></div>",1319:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1319\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">DataSweep</div></div></div><div class=\"TTSummary\">Represents 1 data sweep, including data for each channel, a timestamp, and a sample rate</div></div>",1373:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1373\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationButton</div></div></div><div class=\"TTSummary\">Represents a single button on a BaseStation</div></div>",1390:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1390\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">BaseStationAnalogPair</div></div></div><div class=\"TTSummary\">Represents an Analog Pairing on a BaseStation.</div></div>",1419:"<div class=\"NDToolTip TConstant LC\"><div class=\"TTSummary\">50 ms&nbsp; - The default timeout for a base station command (in milliseconds)</div></div>",1421:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1421\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">explicit</span> BaseStation(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">Connection&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName\">connection,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">uint64</span>&nbsp;</td><td></td><td class=\"PName\">baseTimeout&nbsp;</td><td class=\"PDefaultValueSeparator\">=&nbsp;</td><td class=\"PDefaultValue last\">BASE_COMMANDS_DEFAULT_TIMEOUT</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Creates a BaseStation object.</div></div>",1422:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1422\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">static</span> std::<span class=\"SHKeyword\">string</span> deviceName(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">serial</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div><div class=\"TTSummary\">Static function for creating the universal basestation name that should be used for SensorCloud.</div></div>",1432:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1432\" class=\"NDPrototype NoParameterForm\">std::<span class=\"SHKeyword\">string</span> serial() <span class=\"SHKeyword\">const</span></div><div class=\"TTSummary\">Gets the serial number of the BaseStation.</div></div>",1451:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1451\" class=\"NDPrototype WideForm CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> verifyConfig(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span>&nbsp;</td><td class=\"PType\">BaseStationConfig&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">config,</td></tr><tr><td class=\"first\"></td><td class=\"PType\">ConfigIssues&nbsp;</td><td class=\"PNamePrefix\">&amp;</td><td class=\"PName last\">outIssues</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div><div class=\"TTSummary\">Checks whether the settings in the given BaseStationConfig are ok to be written to the BaseStation.&nbsp; Options that are set will also be validated against each other. If an option that needs to be validated isn\'t currently set, it will be read from the BaseStation.</div></div>",1498:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1498\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Version</div></div></div><div class=\"TTSummary\">Class that represents, and provides helper functions for, a Version number</div></div>",1518:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1518\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Timestamp</div></div></div><div class=\"TTSummary\">Represents a date/time object</div></div>",1574:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1574\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NotSupported</div></div></div><div class=\"TTSummary\">A command/feature was attempted to be used that was not supported.</div></div>",1577:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1577\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_NoData</div></div></div><div class=\"TTSummary\">There is no data available to be accessed</div></div>",1585:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1585\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Communication</div></div></div><div class=\"TTSummary\">The exception for failing to communicate with a device.</div></div>",1592:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1592\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_Connection</div></div></div><div class=\"TTSummary\">The generic connection exception.</div></div>",1608:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1608\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">Error_InvalidConfig</div></div></div><div class=\"TTSummary\">The Configuration is invalid.</div></div>"});