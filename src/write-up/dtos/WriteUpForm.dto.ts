import { IsBoolean, IsString } from "class-validator";

export class WriteUpFormDto {
  @IsString()
  name: string;

  @IsBoolean()
  fullyTorchedAdhesiveAndAllJointsBleeding: boolean;
  
  @IsBoolean()
  keyAreasCheckedForMoisture: boolean;
  
  @IsBoolean()
  noPipeProtrusionsCloseToWalls: boolean;
  
  @IsBoolean()
  screedsInCorrectDirection: boolean;
  
  @IsString()
  siteName: string;
  
  @IsBoolean()
  surfacesCleanedAndCorrectedForPrimer: boolean;
}
