import classes from "@/components/form/Forms.module.scss";
import Router from "next/router";
import React, { FC } from "react";
import { IForm } from "@/shared/types";
import { Badge } from "@mantine/core";
import clsx from "clsx";

type SidebarMenuItemProps = {
  form: IForm;
  isActive?: boolean;
  notificationsNumber?: number;
};

export const SidebarMenuItem: FC<SidebarMenuItemProps> = ({
  form,
  isActive,
  notificationsNumber,
}) => {
  return (
    <div
      className={isActive ? clsx(classes.link, classes.active) : classes.link}
      onClick={() => Router.push("/form/[id]", `/form/${form.id}`)}
    >
      <div className={classes.title}>{form.title}</div>
      {!!notificationsNumber && (
        <Badge color="rgba(80, 51, 255, 1)" circle>
          {notificationsNumber}
        </Badge>
      )}
    </div>
  );
};
