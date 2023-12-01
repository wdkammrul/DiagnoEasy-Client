import useAxios from "../hook/useAxios";

export const imageUpload = async (image) => {
  const axiosPublic = useAxios();
  const formData = new FormData();
  formData.append("image", image);
  const { data } = await axiosPublic.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
    formData
  );
  return data;
};
