import { IExerciseType, ISettings } from "../types";
import { Exercise } from "./exercise";
const availableSmallImages = new Set([
  "abwheel_bodyweight",
  "arnoldpress_dumbbell",
  "arnoldpress_kettlebell",
  "aroundtheworld_dumbbell",
  "backextension_bodyweight",
  "backextension_leveragemachine",
  "ballslams_medicineball",
  "battleropes_bodyweight",
  "behindtheneckpress_band",
  "behindtheneckpress_barbell",
  "behindtheneckpress_smith",
  "benchdip_bodyweight",
  "benchpress_band",
  "benchpress_barbell",
  "benchpress_cable",
  "benchpress_dumbbell",
  "benchpress_kettlebell",
  "benchpress_smith",
  "benchpressclosegrip_barbell",
  "benchpressclosegrip_ezbar",
  "benchpressclosegrip_smith",
  "benchpresswidegrip_barbell",
  "benchpresswidegrip_smith",
  "bentoveronearmrow_dumbbell",
  "bentoverrow_band",
  "bentoverrow_barbell",
  "bentoverrow_cable",
  "bentoverrow_dumbbell",
  "bentoverrow_leveragemachine",
  "bentoverrow_smith",
  "bicepcurl_band",
  "bicepcurl_barbell",
  "bicepcurl_cable",
  "bicepcurl_dumbbell",
  "bicepcurl_ezbar",
  "bicepcurl_leveragemachine",
  "bicyclecrunch_bodyweight",
  "boxsquat_barbell",
  "boxsquat_dumbbell",
  "bulgariansplitsquat_dumbbell",
  "cablecrossover_cable",
  "cablecrunch_cable",
  "cablekickback_cable",
  "cablepullthrough_cable",
  "cabletwist_band",
  "cabletwist_barbell",
  "cabletwist_bodyweight",
  "cabletwist_cable",
  "cabletwist_leveragemachine",
  "calfpressonlegpress_leveragemachine",
  "calfpressonseatedlegpress_leveragemachine",
  "chestdip_bodyweight",
  "chestfly_barbell",
  "chestfly_cable",
  "chestfly_dumbbell",
  "chestfly_leveragemachine",
  "chestpress_band",
  "chestpress_leveragemachine",
  "chinup_bodyweight",
  "chinup_leveragemachine",
  "clean_barbell",
  "cleanandjerk_barbell",
  "concentrationcurl_band",
  "concentrationcurl_barbell",
  "concentrationcurl_cable",
  "concentrationcurl_dumbbell",
  "crossbodycrunch_bodyweight",
  "crunch_bodyweight",
  "crunch_cable",
  "crunch_leveragemachine",
  "deadlift_band",
  "deadlift_barbell",
  "deadlift_cable",
  "deadlift_dumbbell",
  "deadlift_kettlebell",
  "deadlift_leveragemachine",
  "deadlift_smith",
  "deadlifthighpull_barbell",
  "declinebenchpress_dumbbell",
  "declinebenchpress_smith",
  "deficitdeadlift_barbell",
  "deficitdeadlift_trapbar",
  "ellipticalmachine_leveragemachine",
  "facepull_band",
  "farmerswalk_dumbbell",
  "flatkneeraise_bodyweight",
  "flatlegraise_bodyweight",
  "frontraise_band",
  "frontraise_barbell",
  "frontraise_bodyweight",
  "frontraise_cable",
  "frontraise_dumbbell",
  "frontsquat_barbell",
  "frontsquat_cable",
  "frontsquat_dumbbell",
  "frontsquat_kettlebell",
  "frontsquat_smith",
  "glutebridge_band",
  "glutebridge_barbell",
  "glutebridge_dumbbell",
  "glutebridgemarch_bodyweight",
  "glutekickback_band",
  "glutekickback_cable",
  "gobletsquat_dumbbell",
  "gobletsquat_kettlebell",
  "goodmorning_barbell",
  "goodmorning_leveragemachine",
  "goodmorning_smith",
  "hacksquat_barbell",
  "hacksquat_smith",
  "hammercurl_band",
  "hammercurl_cable",
  "hammercurl_dumbbell",
  "handstandpushup_bodyweight",
  "hangclean_kettlebell",
  "hanginglegraise_bodyweight",
  "hanginglegraise_cable",
  "highrow_cable",
  "highrow_leveragemachine",
  "hipabductor_band",
  "hipabductor_bodyweight",
  "hipabductor_cable",
  "hipabductor_leveragemachine",
  "hipadductor_leveragemachine",
  "hipthrust_band",
  "hipthrust_barbell",
  "hipthrust_bodyweight",
  "hipthrust_leveragemachine",
  "inclinebenchpress_barbell",
  "inclinebenchpress_cable",
  "inclinebenchpress_dumbbell",
  "inclinebenchpress_smith",
  "inclinebenchpresswidegrip_barbell",
  "inclinechestfly_cable",
  "inclinechestfly_dumbbell",
  "inclinechestpress_band",
  "inclinechestpress_dumbbell",
  "inclinechestpress_leveragemachine",
  "inclinecurl_dumbbell",
  "inclinerow_barbell",
  "inclinerow_dumbbell",
  "invertedrow_bodyweight",
  "jackknifesitup_bodyweight",
  "jumpsquat_barbell",
  "jumpsquat_bodyweight",
  "kettlebellswing_dumbbell",
  "kettlebellswing_kettlebell",
  "kneelingpulldown_band",
  "kneestoelbows_bodyweight",
  "lateralraise_band",
  "lateralraise_cable",
  "lateralraise_dumbbell",
  "lateralraise_kettlebell",
  "lateralraise_leveragemachine",
  "latpulldown_cable",
  "latpulldown_leveragemachine",
  "legextension_band",
  "legextension_leveragemachine",
  "legpress_leveragemachine",
  "legpress_smith",
  "legsupbenchpress_barbell",
  "lunge_barbell",
  "lunge_bodyweight",
  "lunge_cable",
  "lunge_dumbbell",
  "lyingbicepcurl_cable",
  "lyingbicepcurl_dumbbell",
  "lyinglegcurl_band",
  "lyinglegcurl_leveragemachine",
  "muscleup_bodyweight",
  "obliquecrunch_bodyweight",
  "overheadpress_barbell",
  "overheadpress_dumbbell",
  "overheadpress_ezbar",
  "overheadsquat_barbell",
  "overheadsquat_dumbbell",
  "pecdeck_leveragemachine",
  "pendlayrow_barbell",
  "pistolsquat_bodyweight",
  "pistolsquat_kettlebell",
  "pistolsquat_leveragemachine",
  "plank_bodyweight",
  "preachercurl_barbell",
  "preachercurl_dumbbell",
  "preachercurl_ezbar",
  "preachercurl_leveragemachine",
  "pullover_barbell",
  "pullover_dumbbell",
  "pullup_band",
  "pullup_bodyweight",
  "pullup_leveragemachine",
  "pushpress_barbell",
  "pushpress_bodyweight",
  "pushpress_dumbbell",
  "pushpress_kettlebell",
  "pushup_band",
  "pushup_bodyweight",
  "reversecrunch_bodyweight",
  "reversecrunch_cable",
  "reversecurl_band",
  "reversecurl_barbell",
  "reversecurl_cable",
  "reversecurl_dumbbell",
  "reversefly_band",
  "reversefly_dumbbell",
  "reversefly_leveragemachine",
  "reversehyperextension_band",
  "reversehyperextension_leveragemachine",
  "reverselatpulldown_cable",
  "reverselunge_barbell",
  "reverselunge_bodyweight",
  "reverselunge_dumbbell",
  "reverselunge_kettlebell",
  "reversewristcurl_barbell",
  "reversewristcurl_dumbbell",
  "reversewristcurl_ezbar",
  "romaniandeadlift_barbell",
  "romaniandeadlift_dumbbell",
  "russiantwist_bodyweight",
  "russiantwist_cable",
  "russiantwist_dumbbell",
  "safetysquatbarsquat_barbell",
  "seatedcalfraise_barbell",
  "seatedcalfraise_dumbbell",
  "seatedcalfraise_leveragemachine",
  "seatedfrontraise_barbell",
  "seatedfrontraise_dumbbell",
  "seatedlegcurl_leveragemachine",
  "seatedlegpress_leveragemachine",
  "seatedoverheadpress_barbell",
  "seatedpalmsupwristcurl_dumbbell",
  "seatedrow_band",
  "seatedrow_cable",
  "seatedrow_leveragemachine",
  "seatedwidegriprow_cable",
  "shoulderpress_band",
  "shoulderpress_cable",
  "shoulderpress_dumbbell",
  "shoulderpress_kettlebell",
  "shoulderpress_leveragemachine",
  "shoulderpress_smith",
  "shoulderpressparallelgrip_dumbbell",
  "shrug_band",
  "shrug_barbell",
  "shrug_cable",
  "shrug_dumbbell",
  "shrug_leveragemachine",
  "shrug_smith",
  "sidebend_band",
  "sidebend_cable",
  "sidebend_dumbbell",
  "sidecrunch_band",
  "sidecrunch_bodyweight",
  "sidecrunch_cable",
  "sidehipabductor_barbell",
  "sidehipabductor_bodyweight",
  "sidehipabductor_leveragemachine",
  "sidelyingclam_bodyweight",
  "sideplank_bodyweight",
  "singlelegbridge_bodyweight",
  "singlelegdeadlift_bodyweight",
  "singlelegdeadlift_dumbbell",
  "singlelegglutebridgebench_bodyweight",
  "singlelegglutebridgebentknee_bodyweight",
  "singlelegglutebridgestraight_bodyweight",
  "singleleghipthrust_barbell",
  "singleleghipthrust_bodyweight",
  "singleleghipthrust_leveragemachine",
  "sissysquat_bodyweight",
  "situp_bodyweight",
  "situp_kettlebell",
  "skullcrusher_barbell",
  "skullcrusher_cable",
  "skullcrusher_dumbbell",
  "skullcrusher_ezbar",
  "snatch_dumbbell",
  "splitsquat_band",
  "splitsquat_barbell",
  "splitsquat_bodyweight",
  "splitsquat_dumbbell",
  "splitsquat_kettlebell",
  "squat_barbell",
  "squat_bodyweight",
  "squat_dumbbell",
  "squat_leveragemachine",
  "squat_smith",
  "squatrow_band",
  "standingcalfraise_barbell",
  "standingcalfraise_bodyweight",
  "standingcalfraise_cable",
  "standingcalfraise_dumbbell",
  "standingcalfraise_leveragemachine",
  "standingcalfraise_smith",
  "standingrow_cable",
  "standingrowclosegrip_cable",
  "standingrowreardeltwithrope_cable",
  "standingrowrearhorizontaldeltwithrope_cable",
  "standingrowvbar_cable",
  "stepup_band",
  "stepup_barbell",
  "stepup_bodyweight",
  "stepup_dumbbell",
  "stifflegdeadlift_band",
  "stifflegdeadlift_barbell",
  "stifflegdeadlift_dumbbell",
  "straightlegdeadlift_band",
  "straightlegdeadlift_barbell",
  "straightlegdeadlift_dumbbell",
  "straightlegdeadlift_kettlebell",
  "sumodeadlift_barbell",
  "sumodeadlifthighpull_barbell",
  "superman_bodyweight",
  "superman_dumbbell",
  "tbarrow_leveragemachine",
  "thruster_barbell",
  "toestobar_bodyweight",
  "trapbardeadlift_trapbar",
  "tricepsdip_bodyweight",
  "tricepsdip_leveragemachine",
  "tricepsextension_band",
  "tricepsextension_barbell",
  "tricepsextension_cable",
  "tricepsextension_dumbbell",
  "tricepspushdown_cable",
  "uprightrow_band",
  "uprightrow_barbell",
  "uprightrow_cable",
  "uprightrow_dumbbell",
  "uprightrow_ezbar",
  "vup_band",
  "vup_bodyweight",
  "vup_dumbbell",
  "widepullup_bodyweight",
  "wristcurl_barbell",
  "wristcurl_dumbbell",
  "wristcurl_ezbar",
  "wristroller_bodyweight",
  "zerchersquat_barbell",
]);

const availableLargeImages = new Set([
  "abwheel_bodyweight",
  "arnoldpress_dumbbell",
  "arnoldpress_kettlebell",
  "aroundtheworld_dumbbell",
  "backextension_bodyweight",
  "backextension_leveragemachine",
  "ballslams_medicineball",
  "battleropes_bodyweight",
  "behindtheneckpress_band",
  "behindtheneckpress_barbell",
  "behindtheneckpress_smith",
  "benchdip_bodyweight",
  "benchpress_band",
  "benchpress_barbell",
  "benchpress_cable",
  "benchpress_dumbbell",
  "benchpress_kettlebell",
  "benchpress_smith",
  "benchpressclosegrip_barbell",
  "benchpressclosegrip_ezbar",
  "benchpressclosegrip_smith",
  "benchpresswidegrip_barbell",
  "benchpresswidegrip_smith",
  "bentoveronearmrow_dumbbell",
  "bentoverrow_band",
  "bentoverrow_barbell",
  "bentoverrow_cable",
  "bentoverrow_dumbbell",
  "bentoverrow_leveragemachine",
  "bentoverrow_smith",
  "bicepcurl_band",
  "bicepcurl_barbell",
  "bicepcurl_cable",
  "bicepcurl_dumbbell",
  "bicepcurl_ezbar",
  "bicepcurl_leveragemachine",
  "bicyclecrunch_bodyweight",
  "boxsquat_barbell",
  "boxsquat_dumbbell",
  "bulgariansplitsquat_dumbbell",
  "cablecrossover_cable",
  "cablecrunch_cable",
  "cablekickback_cable",
  "cablepullthrough_cable",
  "cabletwist_band",
  "cabletwist_barbell",
  "cabletwist_bodyweight",
  "cabletwist_cable",
  "cabletwist_leveragemachine",
  "calfpressonlegpress_leveragemachine",
  "calfpressonseatedlegpress_leveragemachine",
  "chestdip_bodyweight",
  "chestfly_barbell",
  "chestfly_cable",
  "chestfly_dumbbell",
  "chestfly_leveragemachine",
  "chestpress_band",
  "chestpress_leveragemachine",
  "chinup_bodyweight",
  "chinup_leveragemachine",
  "clean_barbell",
  "cleanandjerk_barbell",
  "concentrationcurl_band",
  "concentrationcurl_barbell",
  "concentrationcurl_cable",
  "concentrationcurl_dumbbell",
  "crossbodycrunch_bodyweight",
  "crunch_bodyweight",
  "crunch_cable",
  "crunch_leveragemachine",
  "deadlift_band",
  "deadlift_barbell",
  "deadlift_cable",
  "deadlift_dumbbell",
  "deadlift_kettlebell",
  "deadlift_leveragemachine",
  "deadlift_smith",
  "deadlifthighpull_barbell",
  "declinebenchpress_dumbbell",
  "declinebenchpress_smith",
  "deficitdeadlift_barbell",
  "deficitdeadlift_trapbar",
  "ellipticalmachine_leveragemachine",
  "facepull_band",
  "farmerswalk_dumbbell",
  "flatkneeraise_bodyweight",
  "flatlegraise_bodyweight",
  "frontraise_band",
  "frontraise_barbell",
  "frontraise_bodyweight",
  "frontraise_cable",
  "frontraise_dumbbell",
  "frontsquat_barbell",
  "frontsquat_cable",
  "frontsquat_dumbbell",
  "frontsquat_kettlebell",
  "frontsquat_smith",
  "glutebridge_band",
  "glutebridge_barbell",
  "glutebridge_dumbbell",
  "glutebridgemarch_bodyweight",
  "glutekickback_band",
  "glutekickback_cable",
  "gobletsquat_dumbbell",
  "gobletsquat_kettlebell",
  "goodmorning_barbell",
  "goodmorning_leveragemachine",
  "goodmorning_smith",
  "hacksquat_barbell",
  "hacksquat_smith",
  "hammercurl_band",
  "hammercurl_cable",
  "hammercurl_dumbbell",
  "handstandpushup_bodyweight",
  "hangclean_kettlebell",
  "hanginglegraise_bodyweight",
  "hanginglegraise_cable",
  "highrow_cable",
  "highrow_leveragemachine",
  "hipabductor_band",
  "hipabductor_bodyweight",
  "hipabductor_cable",
  "hipabductor_leveragemachine",
  "hipadductor_leveragemachine",
  "hipthrust_band",
  "hipthrust_barbell",
  "hipthrust_bodyweight",
  "hipthrust_leveragemachine",
  "inclinebenchpress_barbell",
  "inclinebenchpress_cable",
  "inclinebenchpress_dumbbell",
  "inclinebenchpress_smith",
  "inclinebenchpresswidegrip_barbell",
  "inclinechestfly_cable",
  "inclinechestfly_dumbbell",
  "inclinechestpress_band",
  "inclinechestpress_dumbbell",
  "inclinechestpress_leveragemachine",
  "inclinecurl_dumbbell",
  "inclinerow_barbell",
  "inclinerow_dumbbell",
  "invertedrow_bodyweight",
  "jackknifesitup_bodyweight",
  "jumpsquat_barbell",
  "jumpsquat_bodyweight",
  "kettlebellswing_dumbbell",
  "kettlebellswing_kettlebell",
  "kneelingpulldown_band",
  "kneestoelbows_bodyweight",
  "lateralraise_band",
  "lateralraise_cable",
  "lateralraise_dumbbell",
  "lateralraise_kettlebell",
  "lateralraise_leveragemachine",
  "latpulldown_cable",
  "latpulldown_leveragemachine",
  "legextension_band",
  "legextension_leveragemachine",
  "legpress_leveragemachine",
  "legpress_smith",
  "legsupbenchpress_barbell",
  "lunge_barbell",
  "lunge_bodyweight",
  "lunge_cable",
  "lunge_dumbbell",
  "lyingbicepcurl_cable",
  "lyingbicepcurl_dumbbell",
  "lyinglegcurl_band",
  "lyinglegcurl_leveragemachine",
  "muscleup_bodyweight",
  "obliquecrunch_bodyweight",
  "overheadpress_barbell",
  "overheadpress_dumbbell",
  "overheadpress_ezbar",
  "overheadsquat_barbell",
  "overheadsquat_dumbbell",
  "pecdeck_leveragemachine",
  "pendlayrow_barbell",
  "pistolsquat_bodyweight",
  "pistolsquat_kettlebell",
  "pistolsquat_leveragemachine",
  "plank_bodyweight",
  "preachercurl_barbell",
  "preachercurl_dumbbell",
  "preachercurl_ezbar",
  "preachercurl_leveragemachine",
  "pullover_barbell",
  "pullover_dumbbell",
  "pullup_band",
  "pullup_bodyweight",
  "pullup_leveragemachine",
  "pushpress_barbell",
  "pushpress_bodyweight",
  "pushpress_dumbbell",
  "pushpress_kettlebell",
  "pushup_band",
  "pushup_bodyweight",
  "reversecrunch_bodyweight",
  "reversecrunch_cable",
  "reversecurl_band",
  "reversecurl_barbell",
  "reversecurl_cable",
  "reversecurl_dumbbell",
  "reversefly_band",
  "reversefly_dumbbell",
  "reversefly_leveragemachine",
  "reversehyperextension_band",
  "reversehyperextension_leveragemachine",
  "reverselatpulldown_cable",
  "reverselunge_barbell",
  "reverselunge_bodyweight",
  "reverselunge_dumbbell",
  "reverselunge_kettlebell",
  "reversewristcurl_barbell",
  "reversewristcurl_dumbbell",
  "reversewristcurl_ezbar",
  "romaniandeadlift_barbell",
  "romaniandeadlift_dumbbell",
  "russiantwist_bodyweight",
  "russiantwist_cable",
  "russiantwist_dumbbell",
  "safetysquatbarsquat_barbell",
  "seatedcalfraise_barbell",
  "seatedcalfraise_dumbbell",
  "seatedcalfraise_leveragemachine",
  "seatedfrontraise_barbell",
  "seatedfrontraise_dumbbell",
  "seatedlegcurl_leveragemachine",
  "seatedlegpress_leveragemachine",
  "seatedoverheadpress_barbell",
  "seatedpalmsupwristcurl_dumbbell",
  "seatedrow_band",
  "seatedrow_cable",
  "seatedrow_leveragemachine",
  "seatedwidegriprow_cable",
  "shoulderpress_band",
  "shoulderpress_cable",
  "shoulderpress_dumbbell",
  "shoulderpress_kettlebell",
  "shoulderpress_leveragemachine",
  "shoulderpress_smith",
  "shoulderpressparallelgrip_dumbbell",
  "shrug_band",
  "shrug_barbell",
  "shrug_cable",
  "shrug_dumbbell",
  "shrug_leveragemachine",
  "shrug_smith",
  "sidebend_band",
  "sidebend_cable",
  "sidebend_dumbbell",
  "sidecrunch_band",
  "sidecrunch_bodyweight",
  "sidecrunch_cable",
  "sidehipabductor_barbell",
  "sidehipabductor_bodyweight",
  "sidehipabductor_leveragemachine",
  "sidelyingclam_bodyweight",
  "sideplank_bodyweight",
  "singlelegbridge_bodyweight",
  "singlelegdeadlift_bodyweight",
  "singlelegdeadlift_dumbbell",
  "singlelegglutebridgebench_bodyweight",
  "singlelegglutebridgebentknee_bodyweight",
  "singlelegglutebridgestraight_bodyweight",
  "singleleghipthrust_barbell",
  "singleleghipthrust_bodyweight",
  "singleleghipthrust_leveragemachine",
  "sissysquat_bodyweight",
  "situp_bodyweight",
  "situp_kettlebell",
  "skullcrusher_barbell",
  "skullcrusher_cable",
  "skullcrusher_dumbbell",
  "skullcrusher_ezbar",
  "snatch_dumbbell",
  "splitsquat_band",
  "splitsquat_barbell",
  "splitsquat_bodyweight",
  "splitsquat_dumbbell",
  "splitsquat_kettlebell",
  "squat_barbell",
  "squat_bodyweight",
  "squat_dumbbell",
  "squat_leveragemachine",
  "squat_smith",
  "squatrow_band",
  "standingcalfraise_barbell",
  "standingcalfraise_bodyweight",
  "standingcalfraise_cable",
  "standingcalfraise_dumbbell",
  "standingcalfraise_leveragemachine",
  "standingcalfraise_smith",
  "standingrow_cable",
  "standingrowclosegrip_cable",
  "standingrowreardeltwithrope_cable",
  "standingrowrearhorizontaldeltwithrope_cable",
  "standingrowvbar_cable",
  "stepup_band",
  "stepup_barbell",
  "stepup_bodyweight",
  "stepup_dumbbell",
  "stifflegdeadlift_band",
  "stifflegdeadlift_barbell",
  "stifflegdeadlift_dumbbell",
  "straightlegdeadlift_band",
  "straightlegdeadlift_barbell",
  "straightlegdeadlift_dumbbell",
  "straightlegdeadlift_kettlebell",
  "sumodeadlift_barbell",
  "sumodeadlifthighpull_barbell",
  "superman_bodyweight",
  "superman_dumbbell",
  "tbarrow_leveragemachine",
  "thruster_barbell",
  "toestobar_bodyweight",
  "trapbardeadlift_trapbar",
  "tricepsdip_bodyweight",
  "tricepsdip_leveragemachine",
  "tricepsextension_band",
  "tricepsextension_barbell",
  "tricepsextension_cable",
  "tricepsextension_dumbbell",
  "tricepspushdown_cable",
  "uprightrow_band",
  "uprightrow_barbell",
  "uprightrow_cable",
  "uprightrow_dumbbell",
  "uprightrow_ezbar",
  "vup_band",
  "vup_bodyweight",
  "vup_dumbbell",
  "widepullup_bodyweight",
  "wristcurl_barbell",
  "wristcurl_dumbbell",
  "wristcurl_ezbar",
  "wristroller_bodyweight",
  "zerchersquat_barbell",
]);

export namespace ExerciseImageUtils {
  export function id(type: IExerciseType): string {
    const equipment = type.equipment || "bodyweight";
    return `${type.id.toLowerCase()}_${(equipment || "bodyweight").toLowerCase()}`;
  }

  export function exists(type: IExerciseType, size: "small" | "large"): boolean {
    return size === "small" ? availableSmallImages.has(id(type)) : availableLargeImages.has(id(type));
  }

  export function existsCustom(type: IExerciseType, size: "small" | "large", settings?: ISettings): boolean {
    const customExercise = settings?.exercises?.[type.id];
    return size === "small" ? !!customExercise?.smallImageUrl : !!customExercise?.largeImageUrl;
  }

  export function ogImageUrl(type: IExerciseType): string {
    const key = Exercise.toUrlSlug(type);
    return `/externalimages/exercises/ogimages/${key}.png`;
  }

  export function url(type: IExerciseType, size: "small" | "large", settings?: ISettings): string | undefined {
    if (exists(type, size)) {
      const src =
        size === "large"
          ? `/externalimages/exercises/full/large/${id(type)}_full_large.png`
          : `/externalimages/exercises/single/small/${id(type)}_single_small.png`;
      return src;
    } else if (existsCustom(type, size, settings)) {
      const customExercise = settings?.exercises?.[type.id];
      return size === "large" ? customExercise?.largeImageUrl : customExercise?.smallImageUrl;
    } else {
      return undefined;
    }
  }
}
