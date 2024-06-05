CREATE TABLE Menu (
    Variable_Firmenname VARCHAR(255),
    Variable_Firmenlogo BLOB,
    Hilfe BLOB,
    Hintergrung BLOB,
    Stundensatz_für_Leistungsphasen DECIMAL(10,2),
    Gut BLOB,
    Neutral BLOB,
    Schlecht BLOB,
    Stundensatz_für_Netto_ProjektWert_in_Projekte DECIMAL(10,2),
    Accountname VARCHAR(255),
    infos VARCHAR(255),
    MwSt DECIMAL(10,2)
);

CREATE TABLE Reg (
    Feedback_Button_JA_NEIN VARCHAR(255)
);

CREATE TABLE Kontakte (
   KontaktID INT AUTO_INCREMENT PRIMARY KEY,
    Abteilung VARCHAR(255),
    Adressblock TEXT,
    Ähnlicher_Firmenschlüssel VARCHAR(255),
    Ähnlicher_Namensschlüssel VARCHAR(255),
    Ähnlichkeit_nach VARCHAR(255),
    ÄhnlichkeitsMultiKey TEXT,
    Ähnlichkeitsschlüssel VARCHAR(255),
    ÄhnlichkeitsTabEtikett TEXT,
    Ähnlichkeitszählung INT,
    Anrede VARCHAR(255),
    Auswahlliste VARCHAR(255),
    Bild BLOB,
    Email_1 VARCHAR(255),
    Email_2 VARCHAR(255),
    EmailAdresse_mit_Name TEXT,
    Erstellt_von VARCHAR(255),
    Fax VARCHAR(255),
    Hinweise TEXT,
    Kontaktblock_Firma_Name_Vorname TEXT,
    Kontaktblock_klein TEXT,
    Kontaktblock_Name_Vorname TEXT,
    Kunde VARCHAR(255),
    Land VARCHAR(255),
    Land_1 VARCHAR(255),
    Land_2 VARCHAR(255),
    Mobil_1 VARCHAR(255),
    Nachname VARCHAR(255),
    Name TEXT,
    Ort_1 VARCHAR(255),
    Ort_2 VARCHAR(255),
    Postfach VARCHAR(255),
    Postleitzahl_1 VARCHAR(255),
    Postleitzahl_2 VARCHAR(255),
    Privat_Mobil VARCHAR(255),
    Privat_Telefon VARCHAR(255),
    Pstatus_ak VARCHAR(255),
    Pstatus_an VARCHAR(255),
    Pstatus_pr VARCHAR(255),
    Straße_1 VARCHAR(255),
    Straße_2 VARCHAR(255),
    Telefon_1 VARCHAR(255),
    Telefonblock TEXT,
    Temp_Daten TEXT,
    test VARCHAR(255),
    Titel VARCHAR(255),
    Typ VARCHAR(255),
    Verantwortlicher VARCHAR(255),
    Vorname VARCHAR(255),
    Vorschau BLOB,
    Webadresse VARCHAR(255)
);
// 10 registros para Kontakte
INSERT INTO Kontakte (Abteilung, Adressblock, Ähnlicher_Firmenschlüssel, Ähnlicher_Namensschlüssel, Ähnlichkeit_nach, ÄhnlichkeitsMultiKey, Ähnlichkeitsschlüssel, ÄhnlichkeitsTabEtikett, Ähnlichkeitszählung, Anrede, Auswahlliste, Bild, Email_1, Email_2, EmailAdresse_mit_Name, Erstellt_von, Fax,  Hinweise, Kontaktblock_Firma_Name_Vorname, Kontaktblock_klein, Kontaktblock_Name_Vorname, Kunde, Land, Land_1, Land_2, Mobil_1, Nachname, Name, Ort_1, Ort_2, Postfach, Postleitzahl_1, Postleitzahl_2, Privat_Mobil, Privat_Telefon, Pstatus_ak, Pstatus_an, Pstatus_pr, Straße_1, Straße_2, Telefon_1, Telefonblock, Temp_Daten, test, Titel, Typ, Verantwortlicher, Vorname, Vorschau, Webadresse)
VALUES
('Abteilung1', 'Adressblock1', 'Ähnlicher_Firmenschlüssel1', 'Ähnlicher_Namensschlüssel1', 'Ähnlichkeit_nach1', 'ÄhnlichkeitsMultiKey1', 'Ähnlichkeitsschlüssel1', 'ÄhnlichkeitsTabEtikett1', 1, 'Anrede1', 'Auswahlliste1', 'Bild1', 'Email_11', 'Email_21', 'EmailAdresse_mit_Name1', 'Erstellt_von1', 'Fax1',  'Hinweise1', 'Kontaktblock_Firma_Name_Vorname1', 'Kontaktblock_klein1', 'Kontaktblock_Name_Vorname1', 'Kunde1', 'Land1', 'Land_11', 'Land_21', 'Mobil_11', 'Nachname1', 'Name1', 'Ort_11', 'Ort_21', 'Postfach1', 'Postleitzahl_11', 'Postleitzahl_21', 'Privat_Mobil1', 'Privat_Telefon1', 'Pstatus_ak1', 'Pstatus_an1', 'Pstatus_pr1', 'Straße_11', 'Straße_21', 'Telefon_11', 'Telefonblock1', 'Temp_Daten1', 'test1', 'Titel1', 'Typ1', 'Verantwortlicher1', 'Vorname1', 'Vorschau1', 'Webadresse1'),
('Abteilung2', 'Adressblock2', 'Ähnlicher_Firmenschlüssel2', 'Ähnlicher_Namensschlüssel2', 'Ähnlichkeit_nach2', 'ÄhnlichkeitsMultiKey2', 'Ähnlichkeitsschlüssel2', 'ÄhnlichkeitsTabEtikett2', 2, 'Anrede2', 'Auswahlliste2', 'Bild2', 'Email_12', 'Email_22', 'EmailAdresse_mit_Name2', 'Erstellt_von2', 'Fax2',  'Hinweise2', 'Kontaktblock_Firma_Name_Vorname2', 'Kontaktblock_klein2', 'Kontaktblock_Name_Vorname2', 'Kunde2', 'Land2', 'Land_12', 'Land_22', 'Mobil_12', 'Nachname2', 'Name2', 'Ort_12', 'Ort_22', 'Postfach2', 'Postleitzahl_12', 'Postleitzahl_22', 'Privat_Mobil2', 'Privat_Telefon2', 'Pstatus_ak2', 'Pstatus_an2', 'Pstatus_pr2', 'Straße_12', 'Straße_22', 'Telefon_12', 'Telefonblock2', 'Temp_Daten2', 'test2', 'Titel2', 'Typ2', 'Verantwortlicher2', 'Vorname2', 'Vorschau2', 'Webadresse2'),
('Abteilung3', 'Adressblock3', 'Ähnlicher_Firmenschlüssel3', 'Ähnlicher_Namensschlüssel3', 'Ähnlichkeit_nach3', 'ÄhnlichkeitsMultiKey3', 'Ähnlichkeitsschlüssel3', 'ÄhnlichkeitsTabEtikett3', 3, 'Anrede3', 'Auswahlliste3', 'Bild3', 'Email_13', 'Email_23', 'EmailAdresse_mit_Name3', 'Erstellt_von3', 'Fax3',  'Hinweise3', 'Kontaktblock_Firma_Name_Vorname3', 'Kontaktblock_klein3', 'Kontaktblock_Name_Vorname3', 'Kunde3', 'Land3', 'Land_13', 'Land_23', 'Mobil_13', 'Nachname3', 'Name3', 'Ort_13', 'Ort_23', 'Postfach3', 'Postleitzahl_13', 'Postleitzahl_23', 'Privat_Mobil3', 'Privat_Telefon3', 'Pstatus_ak3', 'Pstatus_an3', 'Pstatus_pr3', 'Straße_13', 'Straße_23', 'Telefon_13', 'Telefonblock3', 'Temp_Daten3', 'test3', 'Titel3', 'Typ3', 'Verantwortlicher3', 'Vorname3', 'Vorschau3', 'Webadresse3'),
('Abteilung4', 'Adressblock4', 'Ähnlicher_Firmenschlüssel4', 'Ähnlicher_Namensschlüssel4', 'Ähnlichkeit_nach4', 'ÄhnlichkeitsMultiKey4', 'Ähnlichkeitsschlüssel4', 'ÄhnlichkeitsTabEtikett4', 4, 'Anrede4', 'Auswahlliste4', 'Bild4', 'Email_14', 'Email_24', 'EmailAdresse_mit_Name4', 'Erstellt_von4', 'Fax4',  'Hinweise4', 'Kontaktblock_Firma_Name_Vorname4', 'Kontaktblock_klein4', 'Kontaktblock_Name_Vorname4', 'Kunde4', 'Land4', 'Land_14', 'Land_24', 'Mobil_14', 'Nachname4', 'Name4', 'Ort_14', 'Ort_24', 'Postfach4', 'Postleitzahl_14', 'Postleitzahl_24', 'Privat_Mobil4', 'Privat_Telefon4', 'Pstatus_ak4', 'Pstatus_an4', 'Pstatus_pr4', 'Straße_14', 'Straße_24', 'Telefon_14', 'Telefonblock4', 'Temp_Daten4', 'test4', 'Titel4', 'Typ4', 'Verantwortlicher4', 'Vorname4', 'Vorschau4', 'Webadresse4'),
('Abteilung5', 'Adressblock5', 'Ähnlicher_Firmenschlüssel5', 'Ähnlicher_Namensschlüssel5', 'Ähnlichkeit_nach5', 'ÄhnlichkeitsMultiKey5', 'Ähnlichkeitsschlüssel5', 'ÄhnlichkeitsTabEtikett5', 5, 'Anrede5', 'Auswahlliste5', 'Bild5', 'Email_15', 'Email_25', 'EmailAdresse_mit_Name5', 'Erstellt_von5', 'Fax5',  'Hinweise5', 'Kontaktblock_Firma_Name_Vorname5', 'Kontaktblock_klein5', 'Kontaktblock_Name_Vorname5', 'Kunde5', 'Land5', 'Land_15', 'Land_25', 'Mobil_15', 'Nachname5', 'Name5', 'Ort_15', 'Ort_25', 'Postfach5', 'Postleitzahl_15', 'Postleitzahl_25', 'Privat_Mobil5', 'Privat_Telefon5', 'Pstatus_ak5', 'Pstatus_an5', 'Pstatus_pr5', 'Straße_15', 'Straße_25', 'Telefon_15', 'Telefonblock5', 'Temp_Daten5', 'test5', 'Titel5', 'Typ5', 'Verantwortlicher5', 'Vorname5', 'Vorschau5', 'Webadresse5'),
('Abteilung6', 'Adressblock6', 'Ähnlicher_Firmenschlüssel6', 'Ähnlicher_Namensschlüssel6', 'Ähnlichkeit_nach6', 'ÄhnlichkeitsMultiKey6', 'Ähnlichkeitsschlüssel6', 'ÄhnlichkeitsTabEtikett6', 6, 'Anrede6', 'Auswahlliste6', 'Bild6', 'Email_16', 'Email_26', 'EmailAdresse_mit_Name6', 'Erstellt_von6', 'Fax6',  'Hinweise6', 'Kontaktblock_Firma_Name_Vorname6', 'Kontaktblock_klein6', 'Kontaktblock_Name_Vorname6', 'Kunde6', 'Land6', 'Land_16', 'Land_26', 'Mobil_16', 'Nachname6', 'Name6', 'Ort_16', 'Ort_26', 'Postfach6', 'Postleitzahl_16', 'Postleitzahl_26', 'Privat_Mobil6', 'Privat_Telefon6', 'Pstatus_ak6', 'Pstatus_an6', 'Pstatus_pr6', 'Straße_16', 'Straße_26', 'Telefon_16', 'Telefonblock6', 'Temp_Daten6', 'test6', 'Titel6', 'Typ6', 'Verantwortlicher6', 'Vorname6', 'Vorschau6', 'Webadresse6'),
('Abteilung7', 'Adressblock7', 'Ähnlicher_Firmenschlüssel7', 'Ähnlicher_Namensschlüssel7', 'Ähnlichkeit_nach7', 'ÄhnlichkeitsMultiKey7', 'Ähnlichkeitsschlüssel7', 'ÄhnlichkeitsTabEtikett7', 7, 'Anrede7', 'Auswahlliste7', 'Bild7', 'Email_17', 'Email_27', 'EmailAdresse_mit_Name7', 'Erstellt_von7', 'Fax7',  'Hinweise7', 'Kontaktblock_Firma_Name_Vorname7', 'Kontaktblock_klein7', 'Kontaktblock_Name_Vorname7', 'Kunde7', 'Land7', 'Land_17', 'Land_27', 'Mobil_17', 'Nachname7', 'Name7', 'Ort_17', 'Ort_27', 'Postfach7', 'Postleitzahl_17', 'Postleitzahl_27', 'Privat_Mobil7', 'Privat_Telefon7', 'Pstatus_ak7', 'Pstatus_an7', 'Pstatus_pr7', 'Straße_17', 'Straße_27', 'Telefon_17', 'Telefonblock7', 'Temp_Daten7', 'test7', 'Titel7', 'Typ7', 'Verantwortlicher7', 'Vorname7', 'Vorschau7', 'Webadresse7'),
('Abteilung8', 'Adressblock8', 'Ähnlicher_Firmenschlüssel8', 'Ähnlicher_Namensschlüssel8', 'Ähnlichkeit_nach8', 'ÄhnlichkeitsMultiKey8', 'Ähnlichkeitsschlüssel8', 'ÄhnlichkeitsTabEtikett8', 8, 'Anrede8', 'Auswahlliste8', 'Bild8', 'Email_18', 'Email_28', 'EmailAdresse_mit_Name8', 'Erstellt_von8', 'Fax8',  'Hinweise8', 'Kontaktblock_Firma_Name_Vorname8', 'Kontaktblock_klein8', 'Kontaktblock_Name_Vorname8', 'Kunde8', 'Land8', 'Land_18', 'Land_28', 'Mobil_18', 'Nachname8', 'Name8', 'Ort_18', 'Ort_28', 'Postfach8', 'Postleitzahl_18', 'Postleitzahl_28', 'Privat_Mobil8', 'Privat_Telefon8', 'Pstatus_ak8', 'Pstatus_an8', 'Pstatus_pr8', 'Straße_18', 'Straße_28', 'Telefon_18', 'Telefonblock8', 'Temp_Daten8', 'test8', 'Titel8', 'Typ8', 'Verantwortlicher8', 'Vorname8', 'Vorschau8', 'Webadresse8'),
('Abteilung9', 'Adressblock9', 'Ähnlicher_Firmenschlüssel9', 'Ähnlicher_Namensschlüssel9', 'Ähnlichkeit_nach9', 'ÄhnlichkeitsMultiKey9', 'Ähnlichkeitsschlüssel9', 'ÄhnlichkeitsTabEtikett9', 9, 'Anrede9', 'Auswahlliste9', 'Bild9', 'Email_19', 'Email_29', 'EmailAdresse_mit_Name9', 'Erstellt_von9', 'Fax9',  'Hinweise9', 'Kontaktblock_Firma_Name_Vorname9', 'Kontaktblock_klein9', 'Kontaktblock_Name_Vorname9', 'Kunde9', 'Land9', 'Land_19', 'Land_29', 'Mobil_19', 'Nachname9', 'Name9', 'Ort_19', 'Ort_29', 'Postfach9', 'Postleitzahl_19', 'Postleitzahl_29', 'Privat_Mobil9', 'Privat_Telefon9', 'Pstatus_ak9', 'Pstatus_an9', 'Pstatus_pr9', 'Straße_19', 'Straße_29', 'Telefon_19', 'Telefonblock9', 'Temp_Daten9', 'test9', 'Titel9', 'Typ9', 'Verantwortlicher9', 'Vorname9', 'Vorschau9', 'Webadresse9'),
('Abteilung10', 'Adressblock10', 'Ähnlicher_Firmenschlüssel10', 'Ähnlicher_Namensschlüssel10', 'Ähnlichkeit_nach10', 'ÄhnlichkeitsMultiKey10', 'Ähnlichkeitsschlüssel10', 'ÄhnlichkeitsTabEtikett10', 10, 'Anrede10', 'Auswahlliste10', 'Bild10', 'Email_110', 'Email_210', 'EmailAdresse_mit_Name10', 'Erstellt_von10', 'Fax10',  'Hinweise10', 'Kontaktblock_Firma_Name_Vorname10', 'Kontaktblock_klein10', 'Kontaktblock_Name_Vorname10',  'Kunde10', 'Land10', 'Land_110', 'Land_210', 'Mobil_110', 'Nachname10', 'Name10', 'Ort_110', 'Ort_210', 'Postfach10', 'Postleitzahl_110', 'Postleitzahl_210', 'Privat_Mobil10', 'Privat_Telefon10', 'Pstatus_ak10', 'Pstatus_an10', 'Pstatus_pr10', 'Straße_110', 'Straße_210', 'Telefon_110', 'Telefonblock10', 'Temp_Daten10', 'test10', 'Titel10', 'Typ10', 'Verantwortlicher10', 'Vorname10', 'Vorschau10', 'Webadresse10');


CREATE TABLE Firma (
    firmaId int NOT NULL AUTO_INCREMENT,
    firma VARCHAR(100),
    detailbeschreibung VARCHAR(255),
    PRIMARY KEY (firmaId)
);

CREATE TABLE kontakteFirma (
    KontaktID INT,
    firmaId INT,
    FOREIGN KEY (KontaktID) REFERENCES Kontakte( KontaktID),
    FOREIGN KEY (firmaId) REFERENCES Firma(firmaId),
    PRIMARY KEY (KontaktID, firmaId)
);

CREATE TABLE mitarbeiterProjekte (
    MitareiterID INT,
    ProjekteID INT,
    FOREIGN KEY (PojekteID) REFERENCES Projekte( ProjekteID),
    FOREIGN KEY (MitarbeiterID) REFERENCES Mitarbeiter(MitarbeiterID),
    PRIMARY KEY (MitarbeiterID, ProjekteID)
);
CREATE TABLE Akquise (
    Akquisedetails TEXT,
    Änderungsdatum DATE,
    Deadline DATE,
    Erstellungsdatum DATE,
    Erstellt_von VARCHAR(255),
    KontaktID VARCHAR(255),
    verfolgen VARCHAR(255),
    Verantwortlicher VARCHAR(255),
    AkquiseID VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS `Stundenerfassung` (
  `Mindestbestand` INT,
  `Preis` DECIMAL(10,2),
  `Katalogartikel` VARCHAR(255),
  `Menge_auf_Lager_rot` INT ,
  `Menge_auf_Lager_schwarz` INT ,
  `Konstante_Null` INT DEFAULT 0,
  `Projektnummer` VARCHAR(255),
  `Projektkürzel` VARCHAR(255),
  `Tätigkeit` VARCHAR(255),
  `Leistungsart` VARCHAR(255),
  `Leistungsphase` VARCHAR(255),
  `Stunden` INT,
  `Projektleiter` VARCHAR(255),
  `Mitarbeiter` VARCHAR(255),
  `Summe_Projektstunden` INT,
  `KundenID` VARCHAR(255),
  `Datum` DATE,
  `Kontoname` VARCHAR(255),
  `Stundensumme` INT ,
  `Summe_Mitarbeiterstunden` INT,
  `Kurzname` VARCHAR(255),
  `Systeminfos` TEXT,
  `Geändert_von_kurzname` VARCHAR(255),
  `Geändert_von` VARCHAR(255),
  `Tätigkeitsbeschreibung` TEXT,
  `Von` DATE,
  `Bis` DATE,
  `Zeitraum` VARCHAR(255),
  `Umrechnung_Netto_Stunden` INT ,
  `Summe_Umrechnung_Stunden` INT,
  `Letzte_Woche` DATE,
  `ProjektTeam` VARCHAR(255),
  `MitarbeiterTeam` VARCHAR(255),
  `Monat` VARCHAR(255),
  `Anzahl` INT ,
  `Stunden_Netto` INT,
  `Summe_Netto_Projektstunden` INT,
  `ProjektID` VARCHAR(255),
  `Total_Stunden` INT,
  `icon` BLOB,
  `Startzeit` TIME,
  `iconID` VARCHAR(255),
  `Jahreszahl` INT ,
  `Team` VARCHAR(255),
  `MitarbeiterFaktor` DECIMAL(10,2),
  `Stunden_Netto_mitarbeiter` INT ,
  `Summe_Netto_Projektstunden_Mitarbeiter` INT,
  `Datumsstatistik` DATE,
  `Summe_Netto_Projektstunden_Laufend` INT,
  `vAktiv` VARCHAR(255),
  `Summe_Netto_Mitarbeiterstunden` INT,
  `LeistungsphaseID` VARCHAR(255),
  `Summe_Leistungsphase_ProjektID` INT,
  `eins` INT,
  PRIMARY KEY (`ProjektID`)
);


INSERT INTO `Stundenerfassung` (`Mindestbestand`, `Preis`, `Katalogartikel`, `Projektnummer`, `Projektkürzel`, `Tätigkeit`, `Leistungsart`, `Leistungsphase`, `Stunden`, `Projektleiter`, `Mitarbeiter`, `KundenID`, `Datum`, `Kurzname`, `Systeminfos`, `Geändert_von_kurzname`, `Geändert_von`, `Tätigkeitsbeschreibung`, `Von`, `Bis`, `Zeitraum`, `Letzte_Woche`, `ProjektTeam`, `MitarbeiterTeam`, `ProjektID`, `Startzeit`, `iconID`, `Team`, `vAktiv`, `LeistungsphaseID`, `eins`)
VALUES
(10, 99.99, 'Artículo de catálogo', 'P123445', 'PJKT', 'Desarrollo', 'Servicio', 'Fase 1', 8, 'Juan Pérez', 'Ana Gómez', 'K123', '2023-04-15', 'Nombre corto', 'Información del sistema', 'JPerez', 'Juan Pérez', 'Descripción de la actividad', '2023-04-01', '2023-04-15', 'Abril 2023', '2023-04-08', 'Equipo del proyecto', 'Equipo de empleados', 'PID152345', '08:00:00', 'ICON123', 'Equipo A', 'Activo', 'LP123', 1),
(10, 99.99, 'Artículo 1', 'P123245', 'PJKT', 'Desarrollo', 'Servicio', 'Fase 1', 8, 'Juan Pérez', 'Ana Gómez', 'K123', '2023-04-15', 'Nombre corto', 'Información del sistema', 'JPerez', 'Juan Pérez', 'Descripción de la actividad', '2023-04-01', '2023-04-15', 'Abril 2023', '2023-04-08', 'Equipo del proyecto', 'Equipo de empleados', 'PID123445', '08:00:00', 'ICON123', 'Equipo A', 'Activo', 'LP123', 1),
(20, 199.99, 'Artículo 2', 'P123346', 'PJKT', 'Análisis', 'Consultoría', 'Fase 2', 4, 'Laura Martínez', 'Carlos López', 'K124', '2023-04-16', 'Nombre medio', 'Detalles del sistema', 'LMartinez', 'Laura Martínez', 'Análisis de requerimientos', '2023-04-02', '2023-04-16', 'Mayo 2023', '2023-04-09', 'Equipo de análisis', 'Equipo B', 'PID312346', '09:00:00', 'ICON124', 'Equipo B', 'Inactivo', 'LP124', 2),
(500, 4999.99, 'Artículo 50', 'P142394', 'PJKT', 'Testing', 'Soporte', 'Fase 50', 2, 'Sofía Núñez', 'Diego Ramírez', 'K172', '2023-05-14', 'Nombre largo', 'Especificaciones del sistema', 'SNunez', 'Sofía Núñez', 'Pruebas de integración', '2023-05-01', '2023-05-14', 'Junio 2023', '2023-05-07', 'Equipo de pruebas', 'Equipo Z', 'PID127394', '18:00:00', 'ICON172', 'Equipo Z', 'Pendiente', 'LP172', 50),
(15, 149.99, 'Artículo 2', 'P123546', 'PJKT2', 'Investigación', 'Servicio Técnico', 'Fase 2', 5, 'Carlos Sánchez', 'María López', 'K124', '2023-04-16', 'Nombre medio', 'Configuración del sistema', 'CSanchez', 'Carlos Sánchez', 'Revisión de sistemas', '2023-04-02', '2023-04-16', 'Mayo 2023', '2023-04-09', 'Equipo de proyecto B', 'Equipo de soporte', 'PID12346', '09:00:00', 'ICON125', 'Equipo B', 'Activo', 'LP124', 2),
(25, 249.99, 'Artículo 3', 'P123467', 'PJKT3', 'Diseño', 'Creativo', 'Fase 3', 6, 'Laura García', 'José Martínez', 'K125', '2023-04-17', 'Nombre completo', 'Actualización del sistema', 'LGarcia', 'Laura García', 'Diseño conceptual', '2023-04-03', '2023-04-17', 'Junio 2023', '2023-04-10', 'Equipo de diseño', 'Equipo creativo', 'PID182347', '10:00:00', 'ICON126', 'Equipo C', 'Inactivo', 'LP125', 3),
(500, 4999.99, 'Artículo 50', 'P123794', 'PJKT50', 'Finalización', 'Soporte Final', 'Fase 50', 10, 'Sofía Núñez', 'Diego Ramírez', 'K172', '2023-05-14', 'Nombre largo', 'Especificaciones del sistema', 'SNunez', 'Sofía Núñez', 'Pruebas de integración', '2023-05-01', '2023-05-14', 'Junio 2023', '2023-05-07', 'Equipo de pruebas', 'Equipo Z', 'PID192394', '18:00:00', 'ICON172', 'Equipo Z', 'Pendiente', 'LP172', 50);


CREATE TABLE IF NOT EXISTS `Rechnungen` (
  `Erstellt_von` VARCHAR(255),
  `Geändert_am` DATE,
  `HiliteSortiertNach` VARCHAR(255),
  `RechnungID` INT AUTO_INCREMENT,
  `Eins` INT, 
  `BerichtBestellmonat` DATE, 
  `BerichtBestellmonat_anzeigen` VARCHAR(255), 
  `BerichtBestellquartal` VARCHAR(255), 
  `BerichtBestellwoche` INT, 
  `BerichtBestellwoche_anzeigen` VARCHAR(255), 
  `BerichtVersandmonat` DATE,
  `BerichtVersandmonat_anzeigen` VARCHAR(255), 
  `BerichtVersandwoche` INT, 
  `BerichtVersandwoche_anzeigen` VARCHAR(255), 
  `Erstellungsdatum` DATE,
  `Versanddatum` DATE,
  `Bericht_Versand_Quartal` VARCHAR(255), 
  `Temp_Daten` TEXT,
  `Projektkürzel` VARCHAR(255),
  `Projektstatus_abgeschlossen` VARCHAR(255),
  `ProjektID` VARCHAR(255),
  `KundenID` VARCHAR(255),
  `Rechnungskürzel` VARCHAR(255),
  `RechnungsName` VARCHAR(255),
  `Rechnungsnummer` VARCHAR(255),
  `Rechnungsdatum` DATE,
  `Projektname` VARCHAR(255),
  `test` DATE,
  `Status` VARCHAR(255),
  `KopftextID` VARCHAR(255),
  `abzügl_bezahlter_Abschlagsrechnungen_brutto` DECIMAL(10,2),
  `SteuerSatz` DECIMAL(5,2),
  `Rechnungsbetrag_Brutto` DECIMAL(10,2),
  `vPos` VARCHAR(255),
  `Fremdleistung_Netto` DECIMAL(10,2),
  `Summe_Fremdleistung_Brutto` DECIMAL(10,2), 
  `Restbetrag_brutto` DECIMAL(10,2), 
  `Summe_Restbetrag_brutto` DECIMAL(10,2), 
  `Summe_Bezahlte_Beiträge` DECIMAL(10,2), 
  `Summe_Rechnungsbetrag_brutto` DECIMAL(10,2), 
  `Nr` INT,
  `Priv_Oeff` VARCHAR(255),
  `NETTO` DECIMAL(10,2),
  `Steuerwert` DECIMAL(10,2), 
  `BRUTTO` DECIMAL(10,2),
  `Fremdleistung_Brutto` DECIMAL(10,2), 
  `Vorlage` INT,
  `Verm_Re_Betrag_brutto` DECIMAL(10,2),
  `Zahlungsziel` DATE,
  `Mahnungsnummer` INT,
  `Mahnung` DATE,
  `Eingangszahlung` DECIMAL(10,2),
  `Summe_Netto` DECIMAL(10,2), 
  `Summe_Fremdleistungen_Netto` DECIMAL(10,2), 
  `Summe_Steuerwert` DECIMAL(10,2), 
  `Summe_Brutto` DECIMAL(10,2), 
  `Summe_Vorlage` DECIMAL(10,2), 
  `Summe_VermRechnBetrBrutto` DECIMAL(10,2),
  `Summe_Eingangszahlungen` DECIMAL(10,2),
  `Summe_Noch_Offen` DECIMAL(10,2), 
  `Summe_Brutto_Global` DECIMAL(10,2), 
  `Noch_Offen` DECIMAL(10,2), 
  PRIMARY KEY (`RechnungID`)
);


INSERT INTO `Rechnungen` (`Erstellt_von`, `Geändert_am`, `HiliteSortiertNach`, `RechnungID`, `Erstellungsdatum`, `Versanddatum`, `Projektkürzel`, `Projektstatus_abgeschlossen`, `ProjektID`, `KundenID`, `Rechnungskürzel`, `RechnungsName`, `Rechnungsnummer`, `Rechnungsdatum`, `Projektname`, `test`, `Status`, `KopftextID`, `abzügl_bezahlter_Abschlagsrechnungen_brutto`, `SteuerSatz`, `vPos`, `Fremdleistung_Netto`, `Nr`, `Priv_Oeff`, `NETTO`, `Vorlage`, `Zahlungsziel`, `Mahnungsnummer`, `Mahnung`, `Eingangszahlung`) VALUES
('Usuario1', '2023-04-15', 'Nombre', 1, '2023-04-15', '2023-04-15', 'PROJ1', 'No', 'P123345', 'K123', 'RCH1', 'Rechnung 1', '10001', '2023-04-15', 'Proyecto 1', '2023-04-15', 'Abierto', 'KTXT1', 1000.00, 19.00, 'POS1', 500.00, 1, 'Privado', 850.00, 1, '2023-05-15', 1, '2023-04-20', 200.00),
('Usuario2', '2023-04-15', 'Nombre', 2, '2023-04-15', '2023-04-15', 'PROJ2', 'No', 'P124345', 'K123', 'RCH2', 'Rechnung 2', '10002', '2023-04-15', 'Proyecto 2', '2023-04-15', 'Abierto', 'KTXT2', 2000.00, 19.00, 'POS2', 1000.00, 2, 'Privado', 1700.00, 2, '2023-05-15', 2, '2023-04-20', 400.00),
('Usuario3', '2023-04-15', 'Nombre', 3, '2023-04-15', '2023-04-15', 'PROJ3', 'No', 'P123545', 'K123', 'RCH3', 'Rechnung 3', '10003', '2023-04-15', 'Proyecto 3', '2023-04-15', 'Abierto', 'KTXT3', 3000.00, 19.00, 'POS3', 1500.00, 3, 'Privado', 2550.00, 3, '2023-05-15', 3, '2023-04-20', 600.00),
('Usuario4', '2023-04-15', 'Nombre', 4, '2023-04-15', '2023-04-15', 'PROJ4', 'No', 'P123645', 'K123', 'RCH4', 'Rechnung 4', '10004', '2023-04-15', 'Proyecto 4', '2023-04-15', 'Abierto', 'KTXT4', 4000.00, 19.00, 'POS4', 2000.00, 4, 'Privado', 3400.00, 4, '2023-05-15', 4, '2023-04-20', 800.00),
('Usuario5', '2023-04-15', 'Nombre', 5, '2023-04-15', '2023-04-15', 'PROJ5', 'No', 'P123475', 'K123', 'RCH5', 'Rechnung 5', '10005', '2023-04-15', 'Proyecto 5', '2023-04-15', 'Abierto', 'KTXT5', 5000.00, 19.00, 'POS5', 2500.00, 5, 'Privado', 4250.00, 5, '2023-05-15', 5, '2023-04-20', 1000.00),
('Usuario6', '2023-04-15', 'Nombre', 6, '2023-04-15', '2023-04-15', 'PROJ6', 'No', 'P123485', 'K123', 'RCH6', 'Rechnung 6', '10006', '2023-04-15', 'Proyecto 6', '2023-04-15', 'Abierto', 'KTXT6', 6000.00, 19.00, 'POS6', 3000.00, 6, 'Privado', 5100.00, 6, '2023-05-15', 6, '2023-04-20', 1200.00),
('Usuario7', '2023-04-15', 'Nombre', 7, '2023-04-15', '2023-04-15', 'PROJ7', 'No', 'P123459', 'K123', 'RCH7', 'Rechnung 7', '10007', '2023-04-15', 'Proyecto 7', '2023-04-15', 'Abierto', 'KTXT7', 7000.00, 19.00, 'POS7', 3500.00, 7, 'Privado', 5950.00, 7, '2023-05-15', 7, '2023-04-20', 1400.00),

('Usuario50', '2023-04-15', 'Nombre', 50, '2023-04-15', '2023-04-15', 'PROJ50', 'Sí', 'P12394', 'K172', 'RCH50', 'Rechnung 50', '10050', '2023-04-15', 'Proyecto 50', '2023-04-15', 'Cerrado', 'KTXT50', 5000.00, 19.00, 'POS50', 2500.00, 50, 'Público', 4250.00, 50, '2023-06-15', 5, '2023-05-20', 1000.00);





CREATE TABLE IF NOT EXISTS `Projekte` (
  `ProjektID` INT AUTO_INCREMENT PRIMARY KEY,
  `Projektname` VARCHAR(255),
  `Projektkurzel` VARCHAR(255),
  `Beschreibung` TEXT,
  `Verantwortlicher` VARCHAR(255),
  `Beginn` DATE,
  `Status` VARCHAR(255),
  `Erstellt_von` VARCHAR(255),
  `Erstellt_am` DATE,
  `Geaendert_am` DATE,
  `Variable_Projektnr` VARCHAR(255),
  `HiliteSortiertNach` VARCHAR(255),  
  `Eins` INT,
  `Typ` VARCHAR(255),  
  `Faelligkeit` DATE,
  `lfdNr` VARCHAR(255),  
  `Projektsumme_1` FLOAT,
  `KontaktID` VARCHAR(255),
  `Fremdleistungen` FLOAT,
  `Netto_Stundenkontigent` VARCHAR(255),
  `Summe_Stunden` VARCHAR(255),
  `Abschlag_Prozent` FLOAT,
  `Abschlag_Euro` FLOAT,
  `Stundenvorgaben_Netto` FLOAT,
  `Projektwert_vor_Jan07` FLOAT,
  `Projektwert` FLOAT,
  `Netto_Projektwert` FLOAT,
  `Aufgaben_variale` TEXT,
  `Pstatus` VARCHAR(255),
  `Kurznameaktuell` VARCHAR(255),
  `KurznameErsteller` VARCHAR(255),
  `MaterialDatum` DATE,
  `MaterialLeistungsphase` VARCHAR(255),
  `MaterialBeschreibung` TEXT,
  `MaterialAngelegt_von` VARCHAR(255),
  `Status_inbearbeitung` VARCHAR(255),
  `MaterialD` VARCHAR(255),
  `DateienID` VARCHAR(255),
  `Angebotsstatus` VARCHAR(255),
  `Laufende_Numer_Importiert` INT,
  `Uebrige_Stunden_ist` FLOAT,
  `Wert_Planung` FLOAT,
  `Wert_Verfahren` FLOAT,
  `vProjektID` VARCHAR(255),
  `vKontaktID` VARCHAR(255),
  `Projektwert_Summe` FLOAT,
  `Netto_Projektwert_Summe` FLOAT,
  `Summe_Fremdleistungen` FLOAT,
  `Stundenvorgaben_Summe` FLOAT,
  `Uebrige_Stunden_Summe` FLOAT,
  `RestProjektwert_Netto_ueber_Stunden` FLOAT,
  `ProjektwertDetails` TEXT,
  `Ampelwert` FLOAT
);



INSERT INTO Projekte (
    Erstellt_von, Erstellt_am, Geaendert_am, Beschreibung, Variable_Projektnr, 
    HiliteSortiertNach, Projektname, Eins, Status, Typ, Beginn, 
    Faelligkeit, lfdNr, Projektkurzel, Projektsumme_1, Verantwortlicher, KontaktID, 
    Fremdleistungen, Netto_Stundenkontigent, Summe_Stunden, Abschlag_Prozent, 
    Abschlag_Euro, Stundenvorgaben_Netto, Projektwert_vor_Jan07, Projektwert, 
    Netto_Projektwert, Aufgaben_variale, Pstatus, Kurznameaktuell, KurznameErsteller, 
    MaterialDatum, MaterialLeistungsphase, MaterialBeschreibung, MaterialAngelegt_von, 
    Status_inbearbeitung, MaterialD, DateienID, Angebotsstatus, Laufende_Numer_Importiert, 
    Uebrige_Stunden_ist, Wert_Planung, Wert_Verfahren, vProjektID, vKontaktID, 
    Projektwert_Summe, Netto_Projektwert_Summe, Summe_Fremdleistungen, 
    Stundenvorgaben_Summe, Uebrige_Stunden_Summe, RestProjektwert_Netto_ueber_Stunden, 
    ProjektwertDetails, Ampelwert
) VALUES
('Ana Sánchez', '2024-04-21', '2024-04-21', 'Desarrollo de una nueva plataforma web', 'PRJ001', 
 'Prioridad Alta', 'Plataforma Web', 1, 'Activo', 'Desarrollo', '2024-05-01', 
 '2024-12-31', '001', 'PW', 10000.00, 'Carlos Ruiz', 'KID001', 
 10.0, '100 horas', '90 horas', 10.0, 
 1000.00, 200.00, 5000.00, 8000.00, 
 7000.00, 'Tarea A', 'En curso', 'ProyA', 'Creador A', 
 '2024-04-21', 'Fase 1', 'Material A', 'Creador Material A', 
 'En progreso', 'MaterialA', 'DID001', 'Pendiente', 1, 
 90.00, 5000.00, 8000.00, 'VPID001', 'VKID001', 
 15000.00, 7000.00, 5000.00, 
 200.00, 90.00, 7000.00, 
 'Detalles del valor del proyecto A', 95.00),

('Luis Méndez', '2024-04-22', '2024-04-22', 'Renovación de infraestructura IT', 'PRJ002', 
 'Urgencia Media', 'IT Renovación', 1, 'Pendiente', 'Infraestructura', '2024-06-01', 
 '2024-11-30', '002', 'ITR', 15000.00, 'María López', 'KID002', 
 15.0, '150 horas', '140 horas', 15.0, 
 2250.00, 300.00, 7500.00, 12000.00, 
 10500.00, 'Tarea B', 'Pausado', 'ProyB', 'Creador B', 
 '2024-04-22', 'Fase 2', 'Material B', 'Creador Material B', 
 'En revisión', 'MaterialB', 'DID002', 'Aprobado', 2, 
 140.00, 7500.00, 12000.00, 'VPID002', 'VKID002', 
 22500.00, 10500.00, 7500.00, 
 300.00, 140.00, 10500.00, 
 'Detalles del valor del proyecto B', 98.00),

('Ana Sánchez', '2024-04-21', '2024-04-21', 'Desarrollo de una nueva plataforma web', 'PRJ001', 
 'Prioridad Alta', 'Plataforma Web', 1, 'Activo', 'Desarrollo', '2024-05-01', 
 '2024-12-31', '001', 'PW', 10000.00, 'Carlos Ruiz', 'KID001', 
 10.0, '100 horas', '90 horas', 10.0, 
 1000.00, 200.00, 5000.00, 8000.00, 
 7000.00, 'Tarea A', 'En curso', 'ProyA', 'Creador A', 
 '2024-04-21', 'Fase 1', 'Material A', 'Creador Material A', 
 'En progreso', 'MaterialA', 'DID001', 'Pendiente', 1, 
 90.00, 5000.00, 8000.00, 'VPID001', 'VKID001', 
 15000.00, 7000.00, 5000.00, 
 200.00, 90.00, 7000.00, 
 'Detalles del valor del proyecto A', 95.00),

('Luis Méndez', '2024-04-22', '2024-04-22', 'Renovación de infraestructura IT', 'PRJ002', 
 'Urgencia Media', 'IT Renovación', 1, 'Pendiente', 'Infraestructura', '2024-06-01', 
 '2024-11-30', '002', 'ITR', 15000.00, 'María López', 'KID002', 
 15.0, '150 horas', '140 horas', 15.0, 
 2250.00, 300.00, 7500.00, 12000.00, 
 10500.00, 'Tarea B', 'Pausado', 'ProyB', 'Creador B', 
 '2024-04-22', 'Fase 2', 'Material B', 'Creador Material B', 
 'En revisión', 'MaterialB', 'DID002', 'Aprobado', 2, 
 140.00, 7500.00, 12000.00, 'VPID002', 'VKID002', 
 22500.00, 10500.00, 7500.00, 
 300.00, 140.00, 10500.00, 
 'Detalles del valor del proyecto B', 98.00),

('Ana Sánchez', '2024-04-21', '2024-04-21', 'Desarrollo de una nueva plataforma web', 'PRJ001', 
 'Prioridad Alta', 'Plataforma Web', 1, 'Activo', 'Desarrollo', '2024-05-01', 
 '2024-12-31', '001', 'PW', 10000.00, 'Carlos Ruiz', 'KID001', 
 10.0, '100 horas', '90 horas', 10.0, 
 1000.00, 200.00, 5000.00, 8000.00, 
 7000.00, 'Tarea A', 'En curso', 'ProyA', 'Creador A', 
 '2024-04-21', 'Fase 1', 'Material A', 'Creador Material A', 
 'En progreso', 'MaterialA', 'DID001', 'Pendiente', 1, 
 90.00, 5000.00, 8000.00, 'VPID001', 'VKID001', 
 15000.00, 7000.00, 5000.00, 
 200.00, 90.00, 7000.00, 
 'Detalles del valor del proyecto A', 95.00);



CREATE TABLE IF NOT EXISTS `Mitarbeiter` (
  `MitarbeiterID` INT AUTO_INCREMENT PRIMARY KEY,
  `Adresse_1_Typ` VARCHAR(255),
  `Adresse_2_Typ` VARCHAR(255),
  `Ort_1` VARCHAR(255),
  `Ort_2` VARCHAR(255),
  `Firma` VARCHAR(255),
  `Kontaktnr` INT,
  `Erstellt_von` VARCHAR(255),
  `Email` VARCHAR(255),
  `EmailAdresse_mit_Name` VARCHAR(255),
  `Vorname` VARCHAR(255),
  `Bild` BLOB,
  `Nachname` VARCHAR(255),
  `Hinweise` TEXT,
  `Telefon_1` VARCHAR(50),
  `Fax` VARCHAR(50),
  `Postleitzahl_1` VARCHAR(20),
  `Postleitzahl_2` VARCHAR(20),
  `Temp_Daten` TEXT,
  `Ähnlichkeit_nach` VARCHAR(255),
  `Ähnlicher_Firmenschlüssel` VARCHAR(255),
  `Ähnlicher_Namensschlüssel` VARCHAR(255),
  `Ähnlichkeitszählung` INT,
  `Ähnlichkeitsschlüssel` VARCHAR(255),
  `ÄhnlichkeitsMultiKey` VARCHAR(255),
  `ÄhnlichkeitsTabEtikett` VARCHAR(255),
  `Land_1` VARCHAR(255),
  `Land_2` VARCHAR(255),
  `Straße_1` VARCHAR(255),
  `Straße_2` VARCHAR(255),
  `Vorschau` BLOB,
  `Vorschau_anzeigen` BLOB,
  `Anrede` VARCHAR(50),
  `Name` VARCHAR(255),
  `Gruppe` VARCHAR(255),
  `Eins` INT,
  `Webadresse` VARCHAR(255),
  `test` VARCHAR(255),
  `Titel` VARCHAR(255),
  `Postfach` VARCHAR(255),
  `Typ` VARCHAR(255),
  `Auswahlliste` TEXT,
  `Kontaktblock_klein` TEXT,
  `Stundensatz` FLOAT,
  `TAZ` FLOAT,
  `Produktivität` FLOAT,
  `Tagessoll` FLOAT,
  `Projektleiter` VARCHAR(255),
  `Faktor` FLOAT,
  `Telefon_2` VARCHAR(50),
  `Mobil_1` VARCHAR(50),
  `Mobil_2` VARCHAR(50),
  `Kurzname` VARCHAR(255),
  `vMitarbeitername` VARCHAR(255),
  `Stundensatz_Effektiv` FLOAT,
  `Name_für_Projekte` VARCHAR(255),
  `Team` VARCHAR(255),
  `vTeam` VARCHAR(255),
  `Aktiv` VARCHAR(50),
  `DateiID` VARCHAR(255),
  `vAktiv` VARCHAR(255),
  `Aktiv_JA` VARCHAR(50)
);



INSERT INTO `Mitarbeiter` (`Adresse_1_Typ`, `Adresse_2_Typ`, `Ort_1`, `Ort_2`, `Firma`, `Kontaktnr`, `Erstellt_von`, `Email`, `Vorname`, `Nachname`, `Hinweise`, `Telefon_1`, `Fax`, `Postleitzahl_1`, `Postleitzahl_2`, `Land_1`, `Land_2`, `Straße_1`, `Straße_2`, `Anrede`, `Gruppe`, `Webadresse`, `test`, `Titel`, `Postfach`, `Typ`, `Auswahlliste`, `Stundensatz`, `TAZ`, `Produktivität`, `Faktor`, `Telefon_2`, `Mobil_1`, `Mobil_2`, `Kurzname`, `vMitarbeitername`, `Name_für_Projekte`, `Team`, `vTeam`, `Aktiv`, `DateiID`, `vAktiv`) VALUES

('Privat', 'Geschäftlich', 'Berlin', 'München', 'Firma 1', 12345, 'Usuario1', 'usuario1@firma1.com', 'Max', 'Mustermann', 'Keine Hinweise', '03012342567', '0301234568', '10115', '80331', 'Deutschland', 'Deutschland', 'Musterstraße 1', 'Beispielweg 2', 'Herr', 'Gruppe 1', 'www.firma1.com', 'Testdaten', 'Dr.', '12345', 'Typ 1', 'Liste 1', 60.00, 8.00, 80.00, 1.5, '0301234569', '01711234567', '01721234568', 'MMax', 'MustermannM', 'Max Mustermann Projekte', 'Team 1', 'Team 1', 'Ja', 'D12345', 'Ja'),
('Privat', 'Geschäftlich', 'Berlin', 'München', 'Firma 1', 123545, 'Usuario1', 'usuario1@firma1.com', 'Max', 'Mustermann', 'Keine Hinweise', '03012374567', '0301234568', '10115', '80331', 'Deutschland', 'Deutschland', 'Musterstraße 1', 'Beispielweg 2', 'Herr', 'Gruppe 1', 'www.firma1.com', 'Testdaten', 'Dr.', '12345', 'Typ 1', 'Liste 1', 60.00, 8.00, 80.00, 1.5, '0301234569', '01711234567', '01721234568', 'MMax', 'MustermannM', 'Max Mustermann Projekte', 'Team 1', 'Team 1', 'Ja', 'D12345', 'Ja'),
('Privat', 'Geschäftlich', 'Berlin', 'München', 'Firma 1', 123465, 'Usuario1', 'usuario1@firma1.com', 'Max', 'Mustermann', 'Keine Hinweise', '03012434567', '0301234568', '10115', '80331', 'Deutschland', 'Deutschland', 'Musterstraße 1', 'Beispielweg 2', 'Herr', 'Gruppe 1', 'www.firma1.com', 'Testdaten', 'Dr.', '12345', 'Typ 1', 'Liste 1', 60.00, 8.00, 80.00, 1.5, '0301234569', '01711234567', '01721234568', 'MMax', 'MustermannM', 'Max Mustermann Projekte', 'Team 1', 'Team 1', 'Ja', 'D12345', 'Ja'),
('Privat', 'Geschäftlich', 'Berlin', 'München', 'Firma 1', 123845, 'Usuario1', 'usuario1@firma1.com', 'Max', 'Mustermann', 'Keine Hinweise', '03012314567', '0301234568', '10115', '80331', 'Deutschland', 'Deutschland', 'Musterstraße 1', 'Beispielweg 2', 'Herr', 'Gruppe 1', 'www.firma1.com', 'Testdaten', 'Dr.', '12345', 'Typ 1', 'Liste 1', 60.00, 8.00, 80.00, 1.5, '0301234569', '01711234567', '01721234568', 'MMax', 'MustermannM', 'Max Mustermann Projekte', 'Team 1', 'Team 1', 'Ja', 'D12345', 'Ja'),

('Privat', 'Geschäftlich', 'Hamburg', 'Köln', 'Firma 50', 54321, 'Usuario50', 'usuario50@firma50.com', 'Anna', 'Schmidt', 'Keine Hinweise', '0401234567', '0401234568', '20095', '50667', 'Deutschland', 'Deutschland', 'Beispielstraße 50', 'Musterweg 50', 'Frau', 'Gruppe 50', 'www.firma50.com', 'Testdaten', 'Prof.', '54321', 'Typ 50', 'Liste 50', 80.00, 7.00, 90.00, 2.0, '0401234569', '01715012345', '01725012346', 'ASchmidt', 'SchmidtA', 'Anna Schmidt Projekte', 'Team 50', 'Team 50', 'Nein', 'D54321', 'Nein'),
 ('Privat', 'Geschäftlich', 'Berlin', 'München', 'Firma 2', 12346, 'Usuario2', 'usuario2@firma2.com', 'John', 'Doe', 'Keine Hinweise', '03012342568', '0301234569', '10116', '80332', 'Deutschland', 'Deutschland', 'Musterstraße 2', 'Beispielweg 3', 'Herr', 'Gruppe 2', 'www.firma2.com', 'Testdaten', 'Dr.', '12346', 'Typ 2', 'Liste 2', 70.00, 9.00, 90.00, 1.8, '0301234570', '01711234568', '01721234569', 'JDo', 'DoeJ', 'John Doe Projekte', 'Team 2', 'Team 2', 'Ja', 'D12346', 'Ja'), ('Privat', 'Geschäftlich', 'Berlin', 'München', 'Firma 3', 12347, 'Usuario3', 'usuario3@firma3.com', 'Jane', 'Smith', 'Keine Hinweise', '03012374568', '0301234569', '10117', '80333', 'Deutschland', 'Deutschland', 'Musterstraße 3', 'Beispielweg 4', 'Frau', 'Gruppe 3', 'www.firma3.com', 'Testdaten', 'Prof.', '12347', 'Typ 3', 'Liste 3', 80.00, 10.00, 100.00, 2.0, '0301234571', '01711234569', '01721234570', 'JSm', 'SmithJ', 'Jane Smith Projekte', 'Team 3', 'Team 3', 'Ja', 'D12347', 'Ja'), ('Privat', 'Geschäftlich', 'Berlin', 'München', 'Firma 4', 12348, 'Usuario4', 'usuario4@firma4.com', 'David', 'Johnson', 'Keine Hinweise', '03012434568', '0301234569', '10118', '80334', 'Deutschland', 'Deutschland', 'Musterstraße 4', 'Beispielweg 5', 'Herr', 'Gruppe 4', 'www.firma4.com', 'Testdaten', 'Dr.', '12348', 'Typ 4', 'Liste 4', 90.00, 11.00, 110.00, 2.2, '0301234572', '01711234570', '01721234571', 'DJo', 'JohnsonD', 'David Johnson Projekte', 'Team 4', 'Team 4', 'Ja', 'D12348', 'Ja'), ('Privat', 'Geschäftlich', 'Berlin', 'München', 'Firma 5', 12349, 'Usuario5', 'usuario5@firma5.com', 'Emily', 'Brown', 'Keine Hinweise', '03012314568', '0301234569', '10119', '80335', 'Deutschland', 'Deutschland', 'Musterstraße 5', 'Beispielweg 6', 'Frau', 'Gruppe 5', 'www.firma5.com', 'Testdaten', 'Prof.', '12349', 'Typ 5', 'Liste 5', 100.00, 12.00, 120.00, 2.4, '0301234573', '01711234571', '01721234572', 'EBro', 'BrownE', 'Emily Brown Projekte', 'Team 5', 'Team 5', 'Ja', 'D12349', 'Ja');