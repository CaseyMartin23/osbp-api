import { IsArray, IsBoolean, IsString } from "class-validator";

export class WriteUpFormDto {
  @IsString()
  name: string;

  @IsString()
  id: string;

  @IsString()
  userId: string;

  @IsBoolean()
  fullyTorchedAdhesiveAndAllJointsBleeding: boolean;
  
  @IsArray()
  allBleedingJointImages: any[];

  @IsBoolean()
  keyAreasCheckedForMoisture: boolean;

  @IsArray()
  keyAreasMoistureTempImages: any[];
  
  @IsBoolean()
  noPipeProtrusionsCloseToWalls: boolean;

  @IsArray()
  noProtrusionsImages: any[];
  
  @IsBoolean()
  screedsInCorrectDirection: boolean;

  @IsArray()
  screedImages: any[];

  @IsArray()
  cleanedAndPrepedSurfaceImages: any[];

  @IsArray()
  detailedImagesOfCorners: any[];

  @IsArray()
  protrutionImages: any[];

  @IsArray()
  terminationImages: any[];

  @IsArray()
  staggeredOverlapsImages: any[];

  @IsArray()
  counterflashingImages: any[];
  
  @IsString()
  siteName: string;
  
  @IsBoolean()
  surfacesCleanedAndCorrectedForPrimer: boolean;
}
