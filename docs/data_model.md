# Location Data Model

---

The standardization requires a combination of:

- [project-specific](#current-draft-of-project-level-attributes-for-the-standard) = IATI-activity-specific
- [location-specific](#current-draft-of-location-level-attributes-for-the-standard) 
- geospatial attributes in the form of coordinates or [administrative unit boundaries](#administrative-boundaries) that jointly describe a **project location**, as defined [here](https://mapme-initiative.github.io/IATI-Project-Location-Standard/faqs/)

---

## Current Draft of Project-level = IATI Activity-level Attributes for the Standard

### a. Already required in the IATI Standard:
- **Project ID = IATI activity ID using the [IATI identifier rules](https://iatistandard.org/en/guidance/standard-overview/activity-information/creating-iati-identifiers/)**
- **Data Publisher using the [IATI Organisaton Identifier](https://iatistandard.org/en/guidance/publishing-data/how-to-publish-data/how-to-create-your-iati-organisation-identifier/)**
- **Project Title = [Activity Title](https://iatistandard.org/en/guidance/standard-overview/activity-information/key-activity-information-to-publish/)**
- **Project Description = [IATI Activity Description](https://iatistandard.org/en/guidance/standard-overview/activity-information/key-activity-information-to-publish/)**: must be formulated in a way that external parties can understand it as well
- **Project Status = [IATI-Activity Status](https://iatistandard.org/en/iati-standard/203/codelists/activitystatus/)**
- **Project (Start and / or End) Date = [IATI-Activity Date](https://iatistandard.org/en/guidance/standard-guidance/activity-dates-status/)**
- **Project Sector = IATI Sector Vocabulary No 1**: OECD DAC5-Subsector Code (= 5-digit CRS-Code) and DAC5-Subsector Name [DAC5 Digit Sector](https://iatistandard.org/en/iati-standard/203/codelists/sector/); See also: [Activity thematic focus](https://iatistandard.org/en/guidance/standard-guidance/activity-thematic-focus/)
- **Project Recipient Country / Region**: [IATI code list for countries OR regions](https://iatistandard.org/en/iati-standard/203/codelists/sector/)
- **Project Donor OR Client (of the project, upstream) = [IATI Participating Organizations](https://iatistandard.org/en/guidance/standard-guidance/activity-participants/)**

### b. Additional project-level data requirements proposed by our initiative:
- **Type of Financing Instrument**: [IATI codelist finance type](https://iatistandard.org/en/iati-standard/203/codelists/financetype/)
- **Name of Project Executing / Implementing Agency(ies) (of the project, downstream)**: [IATI Participating Organizations](https://iatistandard.org/en/guidance/standard-guidance/activity-participants/) 

### c. Optional project-level data types highly recommended by the IATI secretariat and our initiative:
- **[Date of data collection or latest update](https://iatistandard.org/en/guidance/standard-overview/activity-information/key-activity-information-to-publish/)**
- **[Language Code](https://iatistandard.org/en/guidance/standard-overview/activity-information/key-activity-information-to-publish/)**

---

## Current Draft of Location-level Attributes for the Standard

### a. Already required in IATI
- **[Location Activity Description](https://iatistandard.org/en/iati-standard/203/activity-standard/iati-activities/iati-activity/location/activity-description/)**: A description that qualifies the activity taking place at the location. This should not duplicate information provided in the main (project-level) activity description, and should typically be used to distinguish between activities at multiple locations within a single iati-activity record.
- **[Location Reach](https://iatistandard.org/en/iati-standard/203/activity-standard/iati-activities/iati-activity/location/location-reach/)**: where the activity is carried out (= Code 1) OR the location of the intended beneficiaries / target groups (= Code 2)
- **[Geographic Exactness](https://mapme-initiative.github.io/IATI-Project-Location-Standard/data_model/)**: to be extended to "exact" OR three "approximate" categories (yet unknown, admin unit, security) -> details see below 
- **[Location Description](https://iatistandard.org/en/iati-standard/203/activity-standard/iati-activities/iati-activity/location/description/)**: A description that qualifies the location, not the activity. - How is this useful? Do we need this in addition to location name and location activity description?
- **[Location Type (Name)](https://iatistandard.org/en/iati-standard/203/codelists/locationtype/)**: Including Location Type Code, Location Type Reach, Geodata Type and IATI Category. We propose to add missing data types to this list and to move the admin units from this list and make it its own category within location reach and geospatial attributes.    
- **Geospatial Attributes**: [Administrative Units](https://iatistandard.org/en/iati-standard/203/activity-standard/iati-activities/iati-activity/location/administrative/) and [Point](https://iatistandard.org/en/iati-standard/203/activity-standard/iati-activities/iati-activity/location/point/) -> to be expanded to Point, Line and Polygon for exact locations and administrative units for approximate locations.

### b. We propose the following additional requirements
- **Field ID**: links all relevant attributes of the activity / subactivities at a specific location 
- **[IATI Location ID](https://iatistandard.org/en/iati-standard/203/activity-standard/iati-activities/iati-activity/location/location-id/)**: ID of the coordinates according to a repository
- **Location name**: It should clearly refer to the name of the respective asset ( e.g. rainbow girls school) respectively activity (voucher scheme No 5 target area B), not to be confused with the name of the related community or admin unit(e.g., “village Ksar” or province x). This would further specify/change the current IATI definition.
- **[Location Type (Name)](https://iatistandard.org/en/iati-standard/203/codelists/locationtype/)**: Including Location Type Code, Location Type Reach, Geodata Type and IATI Category. We propose to add missing data types to this list and to move the admin units from this list and make it its own category within location reach and geospatial attributes.    
- **[Geographic Exactness](https://mapme-initiative.github.io/IATI-Project-Location-Standard/data_model/)**: to be extended to "exact (= Code 1)" OR three "approximate" categories (Code 2 exact location is yet unknown, Code 3 location is an admin unit, Code 4 exact location not to be disclosed due to security reasons)
- **Location (Sub-)Activity Status for each location using the same categories as the [IATI-Activity Status](https://iatistandard.org/en/iati-standard/203/codelists/activitystatus/)** In case there are no disaggregated data avalaible, the overall activity status could be assigned to all locations. 
- **Geospatial Attributes (addition)**: coordinates (point, line, polygon) according to   OR admin unit polygon from an [administrative (unit) repository](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/data_model.md#administrative-boundaries) OR other sector-specifi polygon repository like the [IUCN WDPA Protected Areas repository](https://www.protectedplanet.net/en/thematic-areas/wdpa?tab=WDPA)

### c. Recommended, but optional
- **Planned or actual start and / or end date of activity at the location** using the same format as [IATI-Activity Date](https://iatistandard.org/en/guidance/standard-guidance/activity-dates-status/). If there are no disaggregated data, you may assing the project- / activity-level date/s to all respective locations.
- **Date of data collection or latest update** if not already covered at project-level
- **Publishing restrictions due to security reasons**: Although optional, this issue is considered very important by all participants so far. We propose to leave the publication rules up to the publishers, but to make some recommendations to raise awareness of security issues, especially in fragile contexts. One general recommendation could be for each publisher to decide if they only publish approximate locations (e.g. at admin unit 2 level) as a general rule or to decide for every location at country office level, if its exact coordinates should be published, or only its approximate location at admin unit level or if the location should not be published at all.

---

We recommend not to use the following IATI standard elements for our proposed new standard core scheme - all to be discussed:  
- [Geographic Location Class](https://iatistandard.org/en/iati-standard/203/codelists/geographiclocationclass/) because it conflicts with the proposed location type scheme without adding value. It contains only four categories - whether the location refers to a structure, a populated place (e.g. city or village), an administrative division, or another topological feature (e.g. river, nature reserve). Since the location types are much more precise, this does not add value.  
- [Geographic Location Reach](https://iatistandard.org/en/iati-standard/203/codelists/geographiclocationreach/): this distinction is mostly relevant for immaterial location types which already incorporated it. We however could also keep it and categorize our location types accordingly  
- [Geographical Precision](https://iatistandard.org/en/iati-standard/203/codelists/geographicalprecision/): these categories contain overlaps with other categories and its most important elements are already covered by the new proposed categories of exactness together with the location types schema.  

---

## Data Schemas and templates for operationalizing the IATI standard regarding project location data 

[Location types / Investment Types / Asset Types List as a mark down table](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/assets/excels/Location_Types_List_Proposal_01.md)  
This list proposes changes to the following IATI codelist: [IATI location type codelist](https://iatistandard.org/en/iati-standard/203/codelists/locationtype/)   

[Location types / Investment Types / Asset Types List as an Excel Sheet](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/assets/excels/Location_Types_List_Proposal_02.xlsx)  
This list proposes changes to the following IATI codelist: [IATI location type codelist](https://iatistandard.org/en/iati-standard/203/codelists/locationtype/)   

[Complete Excel Template for collecting location-specific data - English version](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/assets/excels/IATI_Project_Location_Data_Template_EN_V03.xlsx)  
In addition to the above-mentioned changes to the IATI location type list, this template uses the [IATI activity status codelist](https://iatistandard.org/en/iati-standard/203/codelists/activitystatus/) and proposes changes to the following IATI codelists: [activity date type](https://iatistandard.org/en/iati-standard/203/codelists/activitydatetype/) and [geographic exactness](https://iatistandard.org/en/iati-standard/203/codelists/geographicexactness/)   
Once it becomes part of the IATI standard, it should use its respective [version](https://iatistandard.org/en/iati-standard/203/codelists/version/)   

[JSON Scheme of the location-specific part of the data model containing all elements of the above Excel template](https://github.com/mapme-initiative/IATI-Project-Location-Standard/blob/main/docs/IATI_project_core_schema_.json)  

To the above schemes, we still have to add the **geographic vocabulary/ies** = [administrative (unit) boundaries](#administrative-boundaries) repository/ies below (ideally recommending only one) and potentially add it to the [IATI geographic vocabulary list](https://iatistandard.org/en/iati-standard/203/codelists/geographicvocabulary/)  

---
   
## Administrative Boundaries  

**Requirements for Administrative (Unit) Boundaries**  

Administrative boundaries are crucial for analysis and visualization. However, these boundaries are subject to frequent changes due to modifications at various levels, such as the merging of districts or the division of municipalities. Maintaining such a dataset internally is impractical for KFW. Therefore, it is essential to identify a reliable existing dataset that meets all analytical and visualization needs while accurately reflecting political boundaries.  
In global datasets, administrative levels are typically categorized from level 0 to level 5. Level 0 represents the country level, while levels 1 through 5 correspond to progressively lower administrative divisions (e.g., states, districts, municipalities, regions, etc.). This standardized nomenclature helps avoid discrepancies in naming conventions across countries. For mapping and analysis purposes, KFW requires data up to at least the third administrative level.  
Given the political sensitivities surrounding boundaries in certain countries, the dataset must allow for flexible representation depending on the audience. For instance, it should enable users to depict Western Sahara as a separate entity or combine it with Morocco, as needed.  
________________________________________

**Available Administrative Boundaries Datasets**  

Based on the defined requirements and the strengths and weaknesses of the various data sources, HDX - OCHA Global Subnational Admin Boundaries emerges as the most suitable option. FieldMaps.io remains a very strong alternative.


| Name | Data sources | Accuracy | Update Frequency | Admin levels | Access | Flexible representation of boundaries |
|------|-------------|----------|-----------------|--------------|--------|--------------------------------------|
| National sources (gvt) | Country government | Varies | Varies | Varies | Varies | NO |
| Fieldmaps.io | HDX, Geoboundaries | High (OCHA + local gov) | Frequent (but based on one person) | Up to level 4 | Free | YES |
| GADM | Unknown data source (Info not available) | Medium | Every 2-3 years | Up to level 4 | Free for non commercial use | NO |
| FAO (GAUL) | HDX, Geoboundaries, SALB | High (official) they validate the units directly with governments | Last updated 2024 (but long break in update from 2015 to 2024, used to be yearly) Next update: 2026 | Up to level 2 | Free | YES |
| Geoboundaries | Government sources, OpenStreetMap, Wikipedia | High | Last updated 2023 | Up to level 4 | Free | NO (USA pov) |
| OpenStreetMap | OSM contributors | Varies (crowdsourced) | Continuous (but user based) | 11 levels | Free | NO |
| HDX - OCHA Global Subnational Admin Boundaries | UN country offices | High (OCHA ArcGIS Server) | Frequent | Depends on the country | Free | YES |
| World Bank Official Boundaries | WB Country Experts, HDX, FAO GAUL | High | Twice a year | Up to level 2 | Free | NO (adheres to WB lvl 0 standards) |
| Mapbox | Commercial supplier | High | Unknown | Up to 4 | Commercial | YES |
| Overture | Geobboundaries | High (Geoboundaries + OSM) | Monthly | Up to 4? | Free | |


**FieldMaps.io**

**Key Advantages of FieldMaps.io**:
- 1.	Comprehensive Coverage: The dataset includes administrative boundaries up to level 5 in some countries, enabling precise analysis.
- 2.	High Detail: The dataset is highly detailed, making it suitable for use at all zoom levels.
- 3.	Disputed Boundaries: Disputed areas, as defined by the United Nations, are included and can be easily selected using specific ISO3 codes. This allows users to merge the geometry of disputed areas with neighboring countries based on the intended audience.
- 4.	Accessibility: The data is freely available with no usage restrictions.
- 5.	Consistency: The dataset has been consistently maintained over the past five years.
- 6.	Accuracy: When compared to more official datasets like FAO’s, there are minimal discrepancies in the names and geometries of administrative areas (only two countries show major differences).
-7.	Flexible Download Options: Users can download the dataset at the global level and by administrative level. Country-level data are also available by original data source; however, these country-specific files are provided without edge-matching across international boundaries.

**Limitations of FieldMaps.io**:
-1.	Data Size: The dataset’s extreme level of detail makes it heavy, which can slow down analysis and make it challenging to manage when working with entire regions.
-2.	Maintenance Risks: The dataset is maintained by a single individual, meaning its quality and timeliness depend on the time they can dedicate to the project. Additionally, there is no guarantee of its long-term availability due to potential hosting and maintenance costs.

**HDX – OCHA Global Subnational Administrative Boundaries**

**Key Advantages of HDX**
-1.	Optimized Base Layer for Performance: To address the limitations of FieldMaps.io—where the first layer is extremely detailed and therefore heavy, slowing analysis and complicating management at regional scale—the HDX dataset uses UN Geodata 1:1M as base layer for level 0. It significantly improves performance while maintaining sufficient spatial accuracy.
-2.	Global Aggregation: Administrative boundaries for 110 countries are aggregated into a single, unified layer, facilitating regional and global analyses without the need to manage multiple country-specific files.
-3.	Multiple Boundary Variants: The dataset is available in three complementary versions, allowing users to choose the most appropriate option for their use case:
o	Edge-Matched (Recommended): Subnational boundaries are aligned to UN Geodata 1:1M international boundaries. This process removes gaps and overlaps at international borders, with only minor simplification at borders. Internal subnational geometries remain unchanged.
o	Original: Boundaries are preserved exactly as provided by their original sources. Gaps and overlaps may exist at international borders. This version is recommended when maintaining full source integrity is critical.
o	Extended: A specialized output designed for users who wish to perform their own edge-matching, particularly when not using UN Geodata 1:1M international boundaries.
-4.	Disputed Areas Handling: Disputed boundaries, as defined by the United Nations, are included and can be easily identified using specific ISO3 codes. This allows users to flexibly merge disputed areas with neighboring countries depending on the intended audience or analytical purpose.
-5.	Historic Administrative Boundaries: A version of the dataset includes historic boundaries for 40 countries, enabling longitudinal and retrospective analyses.
-6.	Comprehensive Administrative Coverage: The dataset includes administrative units up to level 4 in some countries, supporting detailed and fine-grained spatial analysis.
-7.	High Spatial Resolution: The boundaries are highly detailed (level 1 to level 4) and suitable for use across all zoom levels, from national overviews to local-scale mapping.
-8.	Open and Free Access: The dataset is freely available and distributed with no usage restrictions, supporting broad adoption and reuse.
-9.	Consistency and Maintenance: The dataset has been consistently maintained for over five years, ensuring stability and reliability for operational and analytical use.
-10.	High Accuracy: Comparisons with other datasets (e.g., FAO administrative boundaries) show minimal discrepancies in names and geometries.
-11.	Dataset updates: Users are notified whenever the dataset is updated, which is particularly valuable for workflows requiring up-to-date administrative boundaries. A data quality control dashboard has been implemented to control everything single entry that is added/updated. 
-12.	Schema Standardization: A standardized schema is used for country-level metadata, covering both current and historic administrative boundary versions. Boundary geometries at each administrative level also follow a standardized data schema, ensuring consistency across countries and versions. A quality control dashboard validates all incoming and updated data.
-13.	Formats available: The dataset is currently available in multiple formats, including File Geodatabase, Shapefile, GeoJSON, and Excel. Additional formats are planned and will be made available through the upcoming Geo Data API.  
-14.	Update Notification Feature: Users can opt in to receive notifications whenever the dataset is updated. 
-15.	Multiple Access Levels: The dataset is distributed as a single global layer. However, individual country datasets can also be downloaded separately, with the same quality control procedures applied.

**Limitations of HDX**
-1.	Incomplete Global Coverage: Currently, the dataset includes administrative boundaries for approximately 110 countries only. As a result, it is less suitable for global-scale analyses or worldwide map visualizations, where comprehensive country coverage is required. Additional country datasets are expected in the coming months. United Nations Office for the Coordination of Humanitarian Affairs (OCHA) aims to achieve full country coverage by incorporating boundary data from other UN agencies. This is an active and evolving area of work, with participating agencies meeting weekly to coordinate efforts. Pragmatic progress toward expanded coverage is anticipated in the near term

**Conclusion**

While FieldMaps.io meets many of KfW’s operational requirements, its limitations—particularly the large file size and reliance on a single maintainer—warrant careful consideration, especially for long-term and large-scale use. In contrast, HDX – OCHA Global Subnational Administrative Boundaries provides a more robust and scalable alternative, offering aggregated multi-country coverage, multiple boundary variants, consistent long-term maintenance, and the option to subscribe to update notifications when revisions occur.
That said, both datasets should be considered secondary sources and used primarily when official country-level administrative boundary data provided by national authorities are unavailable, inaccessible, or outdated. Where authoritative and up-to-date national datasets exist, these should remain the preferred reference.
Overall, based on the defined requirements and the comparative assessment of strengths and limitations, HDX emerges as the most suitable primary option for KfW’s needs. FieldMaps.io remains a valuable complementary or alternative dataset in specific contexts, depending on operational constraints, performance requirements, and use-case specificity.


