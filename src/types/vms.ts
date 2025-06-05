export interface EsgData {
  rowID: number;
  year: string;
  business_Unit: string;
  section: string;
  esG_Assessment: string;
  vend_No: string;
  vend_Name: string;
  vend_Email: string | null;
  spend_Volumn: number;
  category: string;
  sub_Category: string | null;
  isNewSupplier: string;
  supplier_Location: string;
  signOfConduct: string;
  high_Volumn: string;
  critical_Components: string;
  oem: string;
  critical_Supplier: string;
  critical_Suppliers: string;
  you_Critical_Supplier: string | null;
  critial_NonTier: string | null;
  audit_Critical: string | null;
  number_Of_Critical: string | null;
  audit_Critical_3Year: string | null;
  number_Of_Critical_3Year: string | null;
  envRisk_Serverity: string;
  envRisk_Likelihood: string;
  envRisk_Level: string;
  social_Severity: string;
  social_Likelihood: string;
  social_isRisk: string;
  social_isRisk_Indicator: string | null;
  social_Level: string;
  business_Risk_Severity: string;
  business_Risk_Likelihood: string;
  business_Risk_Level: string;
  esG_Risk_HighPotential: string;
  esG_Risk_Priority_Opt1: string;
  esG_Risk_Priority_Opt2: string | null;
  audit_Every_Year: string | null;
  audit_3Year: string | null;
  has_Corrective: string | null;
  has_ESG: string | null;
  isDuplicate: string | null;
  imported_Date: string | null;
  imported_By: string | null;
  createAt: string;
  createBy: string | null;
  updateAt: string;
  updateBy: string | null;
  auditPlanNo: string | null;
  isActive: string | null;
}

export interface GetEsgAllResponse {
  statusCode: string;
  message: string;
  totalSize: number;
  esgDatas: EsgData[];
}

export interface GetEsgAllRequest {
  getAll: boolean;
}