const DEVICE_DETAILS = [
  {
    name: 'devicelist',
    address: 'config/xmlapi/devicelist.cgi',
    description:
      "Liste aller Geräte mit Kanälen (Enthält u.a. die Namen, Seriennummern, Gerätetypen und ID's). Wird ?show_internal=1 angehängt, werden zudem alle internen Kanäle mit aufgelistet.",
  },
  {
    name: 'functionlist',
    address: 'config/xmlapi/functionlist.cgi',
    description:
      'Liste aller Gewerke mit Kanälen (Enthält u.a. die Namen, Seriennummern (pro Kanal) und IDs)',
  },
  {
    name: 'favoritelist',
    address: 'config/xmlapi/favoritelist.cgi',
    description:
      "Liste aller Favoriten & Benutzer. Wird ?show_datapoint angehängt, werden zusätzlich die Eigenschaften 'datapoint_id' und 'datapoint_type' mit aufgelistet.",
  },
  {
    name: 'mastervalue',
    address: 'config/xmlapi/mastervalue.cgi',
    description:
      "Gibt ein oder mehrere Geräte mit den entsprechenden Namen und Werten zurück. Die IDs der gewünschten Geräte werden dabei über ?device_id= übergeben und ggf. via Komma getrennt. Über &requested_name= können die zurückgegebenen Werte zudem eingeschränkt werden (z.B. ''TEMPERATURE_LOWERING').",
  },
  {
    name: 'programlist',
    address: 'config/xmlapi/programlist.cgi',
    description:
      'Liste aller Programme (Enthält u.a. die Namen, Beschreibungen und IDs)',
  },
  {
    name: 'protocol',
    address: 'config/xmlapi/protocol.cgi',
    description:
      'Gibt das System-Protokoll zurück. Wird der Parameter ?clear=1 übergeben, wird stattdessen das Protokoll gelöscht.',
  },
  {
    name: 'roomlist',
    address: 'config/xmlapi/roomlist.cgi',
    description:
      'Liste aller Räume mit Kanälen (Enthält u.a. die Namen und IDs)',
  },
  {
    name: 'rssilist',
    address: 'config/xmlapi/rssilist.cgi',
    description: 'Liste aller Geräte mit den jeweils aktuellen Signalstärken.',
  },
  {
    name: 'state',
    address: 'config/xmlapi/state.cgi',
    description:
      'Gibt die Kanäle und Stati eines oder mehrerer Geräte zurück. Die IDs der gewünschten Geräte werden dabei über ?device_id= übergeben und ggf. via Komma getrennt. Über &channel_id= kann optional der gewünschte Kanal und über &datapoint_id= optional der gewünschte Datenpunkt übergeben werden.',
  },
  {
    name: 'statelist',
    address: 'config/xmlapi/statelist.cgi',
    description:
      'Liste alle Geräte mit Kanälen und aktuellen Werten (enthält u.a. die Namen, Datenpunkte (z. B. LowBatt), aktuelle/alte Werte (Dimmer)). Über ?ise_id= können die gewünschten Geräte-IDs übergeben werden. Wird zudem &show_internal=1 übergeben, werden zudem die internen Eigenschaften mit aufgelistet.',
  },
  {
    name: 'systemNotification',
    address: 'config/xmlapi/systemNotification.cgi',
    description: 'Liste aller aktuellen Servicemeldungen.',
  },
  {
    name: 'systemNotificationClear',
    address: 'config/xmlapi/systemNotificationClear.cgi',
    description:
      'Löscht alle Servicemeldungen, deren Bestätigung auch möglich ist.',
  },
  {
    name: 'sysvarlist',
    address: 'config/xmlapi/.cgi',
    description:
      "Liste aller Systemvariablen mit dazugehörigen Werten, Wird ?text=true übergeben, werden die Werte stattdessen in der Eigenschaft 'value_text' zurückgegeben.",
  },
  {
    name: 'sysvar',
    address: 'config/xmlapi/sysvar.cgi',
    description:
      'Liefert im Gegensatz zu der vorigen Funktion den Wert nur einer Systemvariable zurück. Diese ist mit ?ise_id= zu übergeben.',
  },

  {
    name: 'runprogram',
    address: 'config/xmlapi/runprogram.cgi',
    description:
      'Startet ein Programm mit der angegebenen ID. Diese wird mit ?program_id= übergeben.',
  },
  {
    name: 'version',
    address: 'config/xmlapi/version.cgi',
    description: 'Gibt die aktuelle Version des XML-API AddOns zurück.',
  },
  {
    name: 'scripterrors',
    address: 'config/xmlapi/scripterrors.cgi',
    description:
      "Gibt die letzten 10 Zeilen aus dem Error-Log für Skripte zurück. Die Logdatei ist unter '/var/log/messages' als Ganzes zu finden.",
  },
  {
    name: 'mastervaluechange',
    address: 'config/xmlapi/mastervaluechange.cgi',
    description:
      'Setzt neue Werte für ein oder mehrere Geräte. Diese werden über ?device_id= ggf. via Komma getrennt übergeben. Über &name= wird der Name der Eigenschaft und über &value= der gewünschte Wert übergeben. (Beispiel: ?device_id=1234,5678&name=TEMPERATURE_LOWERING&value=17.0,22.5)',
  },
  {
    name: 'programactions',
    address: 'config/xmlapi/programactions.cgi',
    description:
      "Ermöglicht das Setzten der Programmeigenschaften 'Aktiv' bzw. 'Sichtbar'. Die ID des entsprechenden Programms wird dabei mit ?program_id= übergeben. Die zusätzlichen Parameter '&active=' bzw. &visible=' setzen dann die gewünschten Eigenschaften. Hierbei sind die möglichen Werte entweder 'true' oder 'false'.",
  },
  {
    name: 'statechange',
    address: 'config/xmlapi/statechange.cgi',
    description:
      "Ändert einen Wert bzw. mehrere Werte eines oder mehrerer Kanäle. Die Kanäle werden dabei ggf. durch Komma getrennt mittels ?ise_id= übergeben. Die zu ändernden Werte sind via '&new_value' ebenfalls durch Komma getrennt zu übergeben.",
  },
];

export default DEVICE_DETAILS;
