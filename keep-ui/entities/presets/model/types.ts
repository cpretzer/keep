// TODO: move to entities/alerts/models

interface Option {
  readonly label: string;
  readonly value: string;
}

export interface Tag {
  id: string;
  name: string;
}

export interface Preset {
  id: string;
  name: string;
  options: Option[];
  is_private: boolean;
  is_noisy: boolean;
  counter_shows_firing_only: boolean;
  should_do_noise_now: boolean;
  alerts_count: number;
  created_by?: string;
  tags: Tag[];
  group_column?: string;
}

type TagPayload = {
  id?: string;
  name: string;
};

export type PresetCreateUpdateDto = {
  name: string;
  CEL: string;
  isPrivate: boolean;
  isNoisy: boolean;
  counterShowsFiringOnly: boolean;
  tags: TagPayload[];
};
