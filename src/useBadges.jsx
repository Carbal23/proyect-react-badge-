import { useLocalStorage } from "./LocalStorage";
import { useEffect, useMemo, useState } from "react";
import { v4 } from "uuid";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const useBadges = (props) => {
  const navigate = useNavigate();
  const [badgeEdit, setBadgeEdit] = useState("");
  const idParams = useParams();
  const idBadgeEdit = idParams.badgeId;
  const [openModal, setOpenModal] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const badges = localStorage.getItem("BADGES_V1");
    const badgesObject = JSON.parse(badges);
    const badgeid = badgesObject.find(
      (badgeObject) => badgeObject.id === idBadgeEdit
    );
    setBadgeEdit(badgeid);
  }, [idParams]);

  const [datos, setDatos] = useState({
    firstName: "",
    lastName: "",
    job: "",
    redSocial: "",
  });

  const id = v4();

  const {
    item: badges,
    saveItem: setBadges,
    error,
    loading,
    itemName,
  } = useLocalStorage("BADGES_V1", []);
  const allBadges = badges.length;

  const [searchBadges,setSearchBadge] = useState(badges);

  useMemo(()=>{
    let resultado = [];
    if (!query.length >= 1) {
      resultado = badges;
    } else {
      resultado = badges.filter((badge) => {
        const badgeText = `${badge.firstName} ${badge.lastName}`.toLowerCase();
        const searchText = query.toLowerCase();
        return badgeText.includes(searchText);
      });
    }
    setSearchBadge(resultado)

  }, [badges, query]);

  // let resultado = [];
  // if (!query.length >= 1) {
  //   searchBadges = badges;
  // } else {
  //   searchBadges = badges.filter((badge) => {
  //     const badgeText = `${badge.firstName} ${badge.lastName}`.toLowerCase();
  //     const searchText = query.toLowerCase();
  //     return badgeText.includes(searchText);
  //   });
  // }

  const addBadge = (badge) => {
    const newBadge = [...badges];
    newBadge.push({
      id: id,
      firstName: badge.firstName,
      lastName: badge.lastName,
      job: badge.job,
      redSocial: badge.redSocial,
      avatar: `https://robohash.org/${badge.redSocial}`,
    });
    setBadges(newBadge);
  };

  const editBadge = (e) => {
    if (
      badgeEdit.firstName.length > 0 &&
      badgeEdit.lastName.length > 0 &&
      badgeEdit.job.length > 0 &&
      badgeEdit.redSocial.length > 0
    ) {
      e.preventDefault();
      const badges = localStorage.getItem("BADGES_V1");
      const badgesObject = JSON.parse(badges);
      const position = badgesObject.findIndex(
        (badgeObject) => badgeObject.id === idBadgeEdit
      );
      console.log("Se a gaurdado los datos");
      let newArr = [...badgesObject];
      newArr[position] = badgeEdit;
      console.log(newArr);
      const stringifyItem = JSON.stringify(newArr);
      localStorage.setItem("BADGES_V1", stringifyItem);
      navigate("/badgesPages");
    } else {
      e.preventDefault();
      alert("Porfavor digite todos los campos antes de guardar el nuevo badge");
    }
  };

  const handleChange = (e) => {
    setDatos({
      ...datos,
      [e.target.name]: e.target.value,
    });
    setBadgeEdit({ ...badgeEdit, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    if (
      datos.firstName.length > 0 &&
      datos.lastName.length > 0 &&
      datos.job.length > 0 &&
      datos.redSocial.length > 0
    ) {
      e.preventDefault();
      console.log("Se a gaurdado los datos");
      console.log(datos);
      addBadge(datos);
      navigate("/badgesPages");
    } else {
      e.preventDefault();
      alert("Porfavor digite todos los campos antes de guardar el nuevo badge");
    }
  };

  const onDeleteBadgeHandle = () => {
    const badgeIndex = badges.findIndex((badge) => badge.id === idBadgeEdit);
    const newBadge = [...badges];
    newBadge.splice(badgeIndex, 1);
    setBadges(newBadge);
    navigate("/badgesPages");
  };

  const onOpenModal = () => {
    setOpenModal(!openModal);
  };

  const onCloseModal = () => {
    setOpenModal(false);
  };

  const filterBadge = (e) => {
    setQuery(e.target.value);
  };

  return {
    badges,
    setBadges,
    error,
    loading,
    allBadges,
    addBadge,
    datos,
    setDatos,
    itemName,
    badgeEdit,
    handleChange,
    handleSubmit,
    editBadge,
    openModal,
    setOpenModal,
    onOpenModal,
    onCloseModal,
    onDeleteBadgeHandle,
    query,
    filterBadge,
    searchBadges,
  };
};
