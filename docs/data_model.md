# Data Schemas and templates for operationalizing the IATI standard regarding project location data 

[Location types / Investment Types / Asset Types List as a mark down table](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/assets/excels/Location_Types_List_Proposal_01.md)
This list proposes changes to the following IATI codelist: [IATI location type codelist](https://iatistandard.org/en/iati-standard/203/codelists/locationtype/)  

[Location types / Investment Types / Asset Types List as an Excel Sheet](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/assets/excels/Location_Types_List_Proposal_01.xlsx)
This list proposes changes to the following IATI codelist: [IATI location type codelist](https://iatistandard.org/en/iati-standard/203/codelists/locationtype/)  

[Complete Excel Template for collecting location-specific data - English version](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/assets/excels/IATI_Project_Location_Data_Template_EN_V03.xlsx)
In addition to the above-mentioned changes to the IATI location type list, this template uses the [IATI activity type codelist](https://iatistandard.org/en/iati-standard/203/codelists/activitystatus/) and proposes changes to the following IATI codelists: [activity date type](https://iatistandard.org/en/iati-standard/203/codelists/activitydatetype/) and [geographic exactness](https://iatistandard.org/en/iati-standard/203/codelists/geographicexactness/) 
Once it becomes part of the IATI standard, it should use its respective [version](https://iatistandard.org/en/iati-standard/203/codelists/version/) 

[JSON Scheme of the location-specific part of the data model containing all elements of the above Excel template](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/IATI_project_core_schema_.json)

To all the above schemes, we still have to add the **geographic vocabulary/ies** = admin unit repository/ies (ideally recommending only one) and potentially add it to the [IATI geographic vocabulary list](https://iatistandard.org/en/iati-standard/203/codelists/geographicvocabulary/)

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

We recommend not to use the following IATI standard elements for our proposed new standard core scheme - all to be discussed:
- [Geographic Location Class](https://iatistandard.org/en/iati-standard/203/codelists/geographiclocationclass/) because it conflicts with the proposed location type scheme without adding value.
- [Geographic Location Reach](https://iatistandard.org/en/iati-standard/203/codelists/geographiclocationreach/): this distinction is mostly relevant for immaterial location types which already incorporated it. TBD
- [Geographical Precision](https://iatistandard.org/en/iati-standard/203/codelists/geographicalprecision/): these categories contain overlaps with other categories and its most important elements are already covered by the new proposed categories of exactness together with the location types schema.
        
   


