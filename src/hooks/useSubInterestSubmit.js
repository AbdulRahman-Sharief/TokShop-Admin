import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { SidebarContext } from "../context/SidebarContext";
import InterestServices from "../services/InterestServices";
import { notifyError, notifySuccess } from "../utils/toast";

const useSubInterestSubmit = (id, interstsId) => {
  const { isDrawerOpen, closeDrawer, setIsUpdate } = useContext(SidebarContext);

  const [update, setUpdate] = useState();
  const {
    register,
    handleSubmit,
    setValue,
    clearErrors,
    formState: { errors },
  } = useForm();

  const onSubmit = ({ name, type }) => {
    if (!name) {
      notifyError("name is required!");
      return;
    }
    const channelData = {
      name: name,
    };
    channelData["channel"] = interstsId;
    console.log(update);
    if (update) {
      InterestServices.updateInterest(id, channelData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("Updated successfully");
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    } else if (interstsId) {
      InterestServices.addInterest(channelData)
        .then((res) => {
          setIsUpdate(true);
          notifySuccess("added successfully");
        })
        .catch((err) => notifyError(err.message));
      closeDrawer();
    }
  };

  useEffect(() => {
    if (!isDrawerOpen) {
      setValue("name");
      clearErrors("name");
      return;
    }
    if (id) {
      InterestServices.getInterestById(id)
        .then((res) => {
          if (res) {
            setValue("name", res.name);
            setUpdate(true);
          }
        })
        .catch((err) => {
          console.log(err);
          notifyError("There is a server error!");
        });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setValue, isDrawerOpen]);
  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
  };
};

export default useSubInterestSubmit;
