export type Message = string;
export type OriginalHash = string;
export type ModifiedHash = string;
export type UpdateSuccessResponse = { success: boolean };

export type HashAlgorithm =
  | "md5"
  | "sha1"
  | "sha224"
  | "sha256"
  | "sha384"
  | "sha512"
  | "ripemd"
  | "ripemd160";

export type Config = {
  hash_algorithm: HashAlgorithm;
};

export type ChartData = {
  labels: number[];
  datasets: [
    {
      label?: string;
      data: number[];
      backgroundColor?: string;
      borderColor?: string;
      borderWidth?: number;
    }
  ];
};
