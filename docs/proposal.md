# Our Proposal to IATI

---

## [Project-level Attributes](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/data_model.md#current-draft-of-project-level--iati-activity-level-attributes-for-the-standard) 
| MapMe Proposal to IATI                   | Current IATI Standard                                  | Mandatory       | Location in the IATI Standard          |
|------------------------------------------|--------------------------------------------------------|-----------------|----------------------------------------|
| Project ID -> IATI Identifier            | [IATI Identifier](https://iatistandard.org/en/guidance/standard-overview/activity-information/creating-iati-identifiers/)                                        | Y               | Element of an IATI Activity            |
| Data Publisher (IATI Org. Identifier)    | [IATI Organisation Identifier](https://iatistandard.org/en/guidance/standard-overview/activity-information/creating-iati-identifiers/)                           | Y               | Element of an IATI Activity            |
| Project Title -> Title                   | [Title](https://iatistandard.org/en/guidance/standard-overview/activity-information/key-activity-information-to-publish/)                                                  | Y               | Element of an IATI Activity            |
| Project Description -> Description       | [Description](https://iatistandard.org/en/guidance/standard-overview/activity-information/key-activity-information-to-publish/)                                            | Y               | Element of an IATI Activity            |
| Project Status -> Activity Status        | [Activity Status](https://iatistandard.org/en/iati-standard/203/codelists/activitystatus/)                                        | Y               | Element of an IATI Activity            |
| Project Start / End Date                 | [Activity Date](https://iatistandard.org/en/guidance/standard-guidance/activity-dates-status/)                                          | Y               | Element of an IATI Activity            |
| Project Sector -> 5-digit CRS Code       | [Sector (DAC Vocabulary No. 1: 5-digit CRS Code & Name)](https://iatistandard.org/en/iati-standard/203/codelists/sector/) | Y               | Element of an IATI Activity            |
| Recipient Country / Region -> provide alternatives              | [Recipient Country / Recipient Region](https://iatistandard.org/en/iati-standard/203/codelists/country/)                   | Y               | Element of an IATI Activity            |
| Project Donor / Client                   | [Participating Organisation](https://iatistandard.org/en/guidance/standard-guidance/activity-participants/)                             | Y               | Element of an IATI Activity            |
| Finance Type                             | [Finance Type](https://iatistandard.org/en/iati-standard/203/codelists/financetype/)                                           | recommended as Y| Element of an IATI Activity            |
| Name of Executing / Implementing Agency  | [Participating Organisation](https://iatistandard.org/en/guidance/standard-guidance/activity-participants/)                             | recommended as Y| Element of an IATI Activity            |
| Date of Data Collection / Latest Update  |   Date of latest Update                                | N               | Element of an IATI Activity             |
| Language Code                            |   Language Code                                        | N               | Element of an IATI Activity             |

---

## [Location-level Attributes](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/data_model.md#current-draft-of-project-level--iati-activity-level-attributes-for-the-standard)
| MapMe Proposal to IATI                       | Current IATI Standard                             | Mandatory       | Location in the IATI Standard              |
|----------------------------------------------|---------------------------------------------------|-----------------|--------------------------------------------|
| Field ID                                     |    -                                              | recommended as Y| Attribute of iati-activity/location        |
| Location ID                                  | [Location ID](https://iatistandard.org/en/iati-standard/203/activity-standard/iati-activities/iati-activity/location/location-id/)                                       | recommended as Y| Sub-element of iati-activity/location      |
| Location Name                                |     -                                             | recommended as Y| Sub-element of iati-activity/location      |
| Location Activity Description                | [Location Activity Description](https://iatistandard.org/en/iati-standard/203/activity-standard/iati-activities/iati-activity/location/location-id/)                     | Y               | Sub-element of iati-activity/location      |
| Assign Location Reach to each Location Type  | [Geographic Location Reach](https://iatistandard.org/en/iati-standard/203/activity-standard/iati-activities/iati-activity/location/location-reach/)                         | Y               | Sub-element of iati-activity/location      |
| Geographic Exactness (exact, approximate (yet unknown, admin unit, security)) |  [Geographic Exactness (exact, approximate - to be changed)](https://iatistandard.org/en/iati-standard/203/codelists/geographicexactness/)   | Y               | Sub-element of iati-activity/location      |
| [Location Type (Name, Code, Description, Reach, Category)](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/assets/excels/Location_Types_List_Proposal_01.md) -> list to be updated and expanded, Reach to be added | [Location Type (Name, Code, Description, Category)](https://iatistandard.org/en/iati-standard/203/codelists/locationtype/)           | Y               | Sub-element of iati-activity/location      |
| Change Geospatial Attributes (point, line, polygon, polygon repositories ([admin unit](https://iatistandard.org/en/iati-standard/203/codelists/geographicvocabulary/), sectoral repositories) | [Administrative](https://iatistandard.org/en/iati-standard/203/activity-standard/iati-activities/iati-activity/location/administrative/) / [Point](https://iatistandard.org/en/iati-standard/203/activity-standard/iati-activities/iati-activity/location/point/) -> to be changed  | Y               | Sub-element of iati-activity/location      |
| Location (Sub-)Activity Status               |  -                                                | recommended as Y| Sub-element of iati-activity/location      |                                
| Location Activity Start / End Date           |   -                                               | N               | Sub-element of iati-activity/location      |
| Date of Data Collection / Latest Update      |   Date of latest Update                           | N               | Sub-element of iati-activity/location      |
| Publishing Restrictions (Security)           |   -                                                | N               | Sub-element of iati-activity/location      |

We recommend to discontinue / integrate the following IATI standard elements in our proposed new standard core scheme - all to be discussed:  
- [Geographic Location Class](https://iatistandard.org/en/iati-standard/203/codelists/geographiclocationclass/) because it conflicts with the proposed location type scheme without adding value. It contains only four categories - whether the location refers to a structure, a populated place (e.g. city or village), an administrative division, or another topological feature (e.g. river, nature reserve). Since the location types are much more precise, this does not add value.  
- [Geographical Precision](https://iatistandard.org/en/iati-standard/203/codelists/geographicalprecision/): these categories contain overlaps with other categories and its most important elements are already covered by the new proposed categories of exactness together with the location types schema.  

---

