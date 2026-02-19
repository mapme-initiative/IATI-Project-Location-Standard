# Data Schemas and templates for operationalizing the IATI standard regarding project location data 

[Location types / Investment Types / Asset Types List as a mark down table](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/assets/excels/Location_Types_List_Proposal_01.md)

[Location types / Investment Types / Asset Types List as an Excel Sheet](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/assets/excels/Location_Types_List_Proposal_01.xlsx)

[Complete Excel Template for collecting location-specific data - English version](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/assets/excels/IATI_Project_Location_Data_Template_EN_V03.xlsx)

[JSON Scheme of the location-specific part of the data model](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/IATI_project_core_schema_.json)

To all the above schemes, we still have to add the geographic vocabulary/ies = admin unit repository/ies (ideally recommending only one) and potentially add it to the [IATI geographic vocabulary list)(https://iatistandard.org/en/iati-standard/203/codelists/geographicvocabulary/)

and we have to add some additional project-specific attributes we want to assign to locations ->

# Current Draft of project-level attributes for the Standard - all to be discussed:

- **Donor Project-No.**
- **Project Title (which language(s)?)**
- **IATI Sector Vocabulary No 1:** DAC5-Subsector Code (=CRS-Code) and DAC5-Subsector Title (IATI languages) [DAC5 Digit Sector][https://iatistandard.org/en/iati-standard/203/codelists/sector/)
- **Country / Region / Supra-National Institution:** IATI code list OR ISO Code list? In IATI, there are no supranational institutions and no regions
- **Project Status:** existing list of IATI categories in [activity type codelist](https://iatistandard.org/en/iati-standard/203/codelists/activitystatus/)? 
- **Financing Instrument / Type:** [IATI codelist finance type](https://iatistandard.org/en/iati-standard/203/codelists/financetype/)?
- **Donor / Client** (of the project, upstream): [IATI codelist](https://iatistandard.org/en/iati-standard/203/codelists/organisationidentifier/)? 
   -> non longer maintained. Alternative?
- **Project Executing / Implementing Agency(ies)** (of the project, downstream):
  [IATI codelist](https://iatistandard.org/en/iati-standard/203/codelists/organisationidentifier/)? -> non longer maintained. Alternative?
- **ESG category of the project?**  Vocabulary?
- **Project team internally responsible for the data** (quality assurance): internal logic  
  
        
   


