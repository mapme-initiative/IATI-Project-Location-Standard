# FAQs


## Why collect information on project locations?

International Aid and Development Cooperation uses project locations to report on the relevance, progress, and impacts of our project portfolios. We create maps of the portfolios of project locations for donors as well as other internal and external stakeholders. The data is also used to appraise potential new project locations during project preparation and to assess portfolios for social, environmental or climate-related risks.


## What is a project location? 

According to the International Aid Transparency Initiative (IATI) Standard, a project location is a set of geographical features and additional attributes that are part of a financially supported activity, where it is not feasible to make any further geographical distinctions with regards to funding.

For instance, a financially supported hospital at specific site is an example of a single-feature project location.

Another example of a multi-feature project location is a group of adjacent agricultural plots that are being financed under an irrigation plan that benefits all producers in that area. A set of protected areas that are jointly financed from a single source of funding is another example of a multi-feature project location.

However, if funding allocation can be further distinguished by smaller geographic areas, data across multiple project locations and the respective financial allocations should be collected. We strongly encourage capturing the geographical discrimination of financial flows to specific project locations where possible, which contributes to transparency and financial accountability.

In our data model, a location is always defined as the combination of a specific project activity with its respective geographic coordinates and additional project-specific, site-specific and activity-related attributes.

Thus, additional attributes of a project location are project number, village name, location name, activity description, location type and geographical exactness, among others.


## What is a location type?

While most of the other attributes of the data model template closely follow International Aid Transparency Initiative [IATI](https://iatistandard.org/en/iati-standard/) standards, the existing list of IATI [location types](https://iatistandard.org/en/iati-standard/203/codelists/locationtype/), that was inadequate to international aid and development cooperation, has been amended to cover the full range of projects. A "location type" summarizes the output- or intervention-related type of a physical location or - in case there is no physical location related to a project activity (i.e. a so-called "immaterial location type") - its target area.

Our updated list of 224 IATI location types cover all sectors of international aid and development: 32 location types were taken unchanged from the original IATI list (i.e. bridge), 14 location types were changed slightly (i.e. from "water pumping station" to "water pump" keeping its code) and 178 new project location types have been created. These include for example, immaterial location types "capacity development / training" or "voucher(s) (system) distributrion area", which cannot be plotted based on any physical features on a map, but can be defined by their target area. Please refer to the list of location types in the Excel template or in the json model for more information.

For you to find your most suitable location type easily, we grouped them into "location type themes" that are most typical to a certain sector, i.e. you will find the location type "school" under the preselection field, i.e. location type theme "Education". For location types that occur in many sectors, i.e. "building", please choose the location type theme "_Generic / Cross_Sectoral".   

If a specific location type is not available, please use the most similar available type (e.g. "well" for "extraction well") and mention "extraction well" in the activity description. If you cannot find any suitable similar location type, please choose "other physical" or "other immaterial".


## What are approximate locations and how can they be used?

Approximate locations should be used instead on exact ones, if one of the following circumstances apply:

- An exact project location has not (yet) been specified or is not yet known (e.g., the exact project locations have not yet been determined) -> then choose the option: approximate (yet unknown)
- An exact project location is not to be collected or communicated due to security reasons (e.g., in a conflict zone) -> then choose the option: approximate (security)
- The target location(s) is/are one or more administrative units, such as a district, a province, or the entire country or group of countries (e.g., an entire country for a Policy-Based-Lending project or a number of districts in a country for a decentralization project) -> then choose the option: approximate (admin unit)


## When should project location information be collected?

We strongly encourage project executing agencies (PEA) or consultant staff to collect project locations as early as possible, to optimize the potential utility of such data throughout the entire project cycle. Ideally, data should already be collected during the project preparation phase, e.g. as part of a feasibility study. 

If exact locations cannot be determined at this stage, approximate location should be used (see below) and rechecked later during project appraisal and inception stages, where it may be possible to update approximate to exact locations. During project implementation, data should be updated at least once annually in project progress reviews. This ensures that any potential changes are reflected in the geographical allocation of funds, which are common in International Aid and Development Cooperation projects.


## How to deal why privacy and security issues?

The Excel template must be submitted without containing any personal data or any data that could be linked to individual persons, such as houses of private households. Exact coordinates of project locations remain confidential and are not to be published publicly.

Location data in fragile and conflict contexts are treated with extra diligence. If an exact project location is not to be collected or communicated due to security reasons, select the option "approximate (security)" in the "Geographic Exactness" column. Furthermore, by indicating "yes" in the column "Publishing restrictions due to security reasons" associated to a project location, it will be omitted from publicly available reports.


## How was the model developed with respect to IATI standards?

The IATI project location standard being developed here will be mostly based on the existing codelists of the International Aid Transparency Initiative [IATI](https://iatistandard.org/en/iati-standard/) to collect project specific geo-information and other relevant location attributes, which are used by international aid and development organizations. It harmonizes and coordinates aid and development projects across multiple donor agencies.

However, the existing IATI standard is not yet considered operational at subnational level - mainly, because its location types list is not (yet) suitable for international aid and development cooperation projects and other types of relevant attributes have not yet been selected and prioritized (for example, the most suitable administrative unit repositories) for a common minimum list of location attributes, i.e. a true common standard.   

Therefore, the existing geolocation-related elements of the IATI standard were further developed and operationalized in our model. In particular, the existing IATI list of location types was modified to cover all physical and immaterial location types required by international aid and development cooperation standards. Also, the "exactness" categorization of geo-coordinates was expanded from the binary choice between "exact" and "approximate" to "exact" and three distinct categories of "approximate":
- "exact location is yet unknown: approximate (yet unknown),
- "exact location not to be published due to security concerns": approximate (security) and
- location is a an "administrative unit": approximate (admin unit)
