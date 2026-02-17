# Collecting Project Locations data

## What kind of data is collected? 
*A Project location is defined as a set of one or more spatial features that are part of a financially supported activity, where it is not feasible to make any further geographical distinctions regarding funding.* 

The responsible party gathers all project locations and associated information, which has received financial support, within the context of a specific cooperation project. Project locations are generally collected on the **output level**. Additionally, if geospatial data contributes to the measurement of project outcomes and impacts, then location data for potential outcome sites should also be collected. 

Examples: 

1. A project financially supports the construction of a hospital. The hospital is built at a specific location. It is represented as a single feature (point), which indicates the spatial location of the hospital (=output). Project outcomes are measured using non-geospatial data (e.g. patient statistics), hence no additional project locations information needs to be collected. 

2. A project financially supports the construction of irrigation infrastructure that benefits a group of small-scale farmers. The irrigation infrastructure (=output) is composed of multiple features (e.g. weirs and watercourses) that are mapped as a collection of features (i.e. multiple points). Furthermore, remote sensing data is consulted to measure project outcomes (e.g. by quantifying changes in agricultural productivity). In this case, geospatial information on outcome areas (i.e. the irrigated fields that make use of and benefit from the irrigation infrastructure) should also be submitted.

## Initial data collection and frequency of updates
KfW strongly encourages the PEA or consultant to collect geo-coordinates **as early as possible** to increase the utilization potential of such data throughout the entire project cycle. If possible, data should be collected already during the project preparation phase, e.g. as part of a feasibility study. Data can be updated later if a project location site changes. Data updates should be ideally performed on an annual basis with the preparation of progress reports, if not otherwise specified. 

## Geographical accuracy, geometry, and aggregation 
The IATI standard describes a project location as **exact** or **approximate**. Exact locations refer to the geographical endpoints of financial flows and are reported with precise coordinates. All exact coordinates in Excel must be collected using WGS 84 (EPSG 4326) as the coordinate reference system, which is the standard for web mapping applications. Coordinates ("Latitude" and "Longitude" columns) have to be provided in decimal format with an accuracy of at least 5 digits after the separator (i.e. 00.00000).

It is advised to report an **approximate** project location, if the location of project implementation is a target area defined by an administrative unit, or if the exact location of the project implementation site is (yet) unknown or if it should be anonymized (e.g. for security reasons). Also in these two latter cases, the respective administrative unit (at an appropriate level) where the project is implemented should be used instead. More explanations on when to use approximate locations are given in the FAQs.

Project locations can be represented by three **types of geometry**:
- **points**, e.g. a well or a hospital
- **lines**, e.g. a road or transmission line
- **polygons**, e.g. a protected area, agricultural plot, or administrative unit

Additionally, different levels of detail may be used to represent this information. A road can be further segmented, where each sub-section represents different measures that have been financed, respectively. Furthermore, locations may be **aggregated** in a polygon that represents an intervention area or administrative unit. This might be useful for cases where there are a large number of sites that are part of the same project, and also if precise locations are unknown or if they should not be revealed due to privacy or security reasons. 

While there are no strict rules governing the choice of geometry type and aggregation level for data collection, the following principles should be applied by the responsible party: 
- *Maximize transparency and precision* of financial flows
- Allow for *precise and unambigous spatial identification and delination* of project locations and different supported activities
- *Preserve data privacy:* data should not be collected on an aggregation level where it contains personal information or could lead to the identification of individuals
- *Avoid security risks*: data should not be collected on an aggregation level that might expose or endanger vulnerable groups, such as refugees or minorities that might face discrimination
- Follow a reasonable *cost-benefit ratio* for collecting and producing the required information

In case you are unsure, please get in touch with your project partner to discuss the necessary details. 

## Collection of point-locations

For the collection of point-loctions, we currently accept submissions in **.XLSX** and **.GeoJSON** formats.   

### Using Excel for point-locations
 
 The **.XLSX** format is best suited, if your institution does not know how to handle geospatial data and has no former experience with Geographic Information System (GIS) software. In this case you can use the most recent version of our [Excel templates](./annex1.md) to collect all relevant information.

## Collection of point-, line-, and polygon-locations using GIS software
For the collection of point-locations, the use of **.GeoJSON** is optional but recommended for its reliability and flexibility. For the collection of line- or polygon-locations, only **.GeoJSON** format is accepted.

We highlight two common cases for generating the required data: 

 1. **Desktop-production**: For manual data collection, we recommend using the [Excel templates](./annex1.md) to store all attributes and merging this information with spatial information (feature geometries) in a GIS software. Since the Excel templates are pre-configured, it is easier to provide data that is compliant with our data-model and pass the validation check as a way to ensure data quality. A short video tutorial (to be released soon) will demonstrate how to use the Excel template with QGIS software.

 2. **Database-extraction**: If location information is available in a geospatial database, it is possible to extract and transform the data into field-mappings that also match our requirements. In these cases, the data-model can be provided as a [JSON schema](./annex2.md). This supports batch conversions as a starting point; any missing information can then be manually added.


If GeoJSON format is used, multi-point, -line or -polygon features can also be submitted to reduce data redundancies. This can be useful if the same project activity benefits multiple sites (e.g. all irrigated fields that benefit from an irrigation infrastructure). You can also use multi geometry feature collections if your submitted data contains different geometry formats. 


