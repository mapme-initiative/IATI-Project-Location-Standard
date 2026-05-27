<img width="527" height="81" alt="image" src="https://github.com/user-attachments/assets/c9d761be-3b9b-4753-a6e9-1299225b9011" /># Our Proposal to IATI

---

## Project-level Attributes 
| MapMe Data Type                          | Name in the IATI Standard                              | Mandatory       | Location in the IATI Standard          |
|------------------------------------------|--------------------------------------------------------|-----------------|----------------------------------------|
| Project ID                               | IATI Identifier                                        | Y               | Element of an IATI Activity            |
| Data Publisher                           | IATI Organisation Identifier                           | Y               | Element of an IATI Activity            |
| Project Title                            | Title                                                  | Y               | Element of an IATI Activity            |
| Project Description                      | Description                                            | Y               | Element of an IATI Activity            |
| Project Status                           | Activity Status                                        | Y               | Element of an IATI Activity            |
| Project Start / End Date                 | Activity Date                                          | Y               | Element of an IATI Activity            |
| Project Sector                           | Sector (DAC Vocabulary No. 1: 5-digit CRS Code & Name) | Y               | Element of an IATI Activity            |
| Project Recipient Country / Region       | Recipient Country / Recipient Region                   | Y               | Element of an IATI Activity            |
| Project Donor / Client                   | Participating Organisation                             | Y               | Element of an IATI Activity            |
| Type of Financing Instrument             | Finance Type                                           | recommended as Y| Element of an IATI Activity            |
| Name of Executing / Implementing Agency  | Participating Organisation                             | recommended as Y| Element of an IATI Activity            |
| Date of Data Collection / Latest Update  |   Date of latest Update                                | N               | Element of an IATI Activity             |
| Language Code                            |   Language Code                                        | N               | Element of an IATI Activity             |

---

## Location-level Attributes
| MapMe Data Type                              | Name in the IATI Standard                         | Mandatory       | Location in the IATI Standard              |
|----------------------------------------------|---------------------------------------------------|-----------------|--------------------------------------------|
| Field ID                                     |    -                                              | recommended as Y| Attribute of iati-activity/location        |
| IATI Location ID                             | Location ID                                       | recommended as Y| Sub-element of iati-activity/location      |
| Location Name                                |     -                                             | recommended as Y| Sub-element of iati-activity/location      |
| Location Activity Description                | Location Activity Description                     | Y               | Sub-element of iati-activity/location      |
| Location Class (physical / immaterial)       | Geographic Location Reach                         | Y               | Sub-element of iati-activity/location      |
| Geographic Exactness (exact, approximate (yet unknown, admin unit, security)) |  Geographic Exactness (exact, approximate - to be changed)   | Y               | Sub-element of iati-activity/location      |
| Location Activity Description                | Location Activity Description                     | Y               | Sub-element of iati-activity/location      |
| Location Type (Name, Code, Category)         | Location Type (Name, Code, Category)              | Y               | Sub-element of iati-activity/location      |
| Geospatial Attributes (point, line, polygon, polygon repositories (admin unit, sectoral repositories) | Administrative / Point -> to be changed  | Y               | Sub-element of iati-activity/location      |

| Location (Sub-)Activity Status               |  -                                                | recommended as Y| Sub-element of iati-activity/location      |                                
| Location Activity Start / End Date           |   -                                               | N               | Sub-element of iati-activity/location      |
| Date of Data Collection / Latest Update      |   Date of latest Update                           | N               | Sub-element of iati-activity/location      |
| Publishing Restrictions (Security)           |   -                                                | N               | Sub-element of iati-activity/location      |

