import React, { FC } from "react";
import {
  ActionIcon,
  CopyButton,
  Flex,
  rem,
  TextInput,
  Tooltip,
} from "@mantine/core";
import { IconCheck, IconCopy } from "@tabler/icons-react";
import { IForm } from "@/shared/types";
import classes from "@/components/form/FormTitle.module.scss";

type FormTitleProps = {
  form: IForm;
  publicLink: string;
};

const FormTitle: FC<FormTitleProps> = ({ form, publicLink }) => {
  const copyFormLink = (
    <CopyButton value={publicLink} timeout={2000}>
      {({ copied, copy }) => (
        <Tooltip
          label={copied ? "Готово" : "Скопировать"}
          withArrow
          position="right"
        >
          <ActionIcon
            color={copied ? "teal" : "var(--color-dark-2)"}
            variant="subtle"
            onClick={copy}
            style={{ width: rem(16), height: rem(16) }}
          >
            {copied ? (
              <IconCheck style={{ width: rem(16) }} />
            ) : (
              <IconCopy style={{ width: rem(16) }} />
            )}
          </ActionIcon>
        </Tooltip>
      )}
    </CopyButton>
  );

  return (
    <Flex className={classes.wrapper} mih={50}>
      <TextInput
        variant="unstyled"
        placeholder="Введите название формы"
        className={classes.title}
        value={form.title}
        size="xl"
        styles={{ root: { width: "100%" } }}
      />
      <div className={classes.subtitle}>
        {form.id}
        {copyFormLink}
      </div>
    </Flex>
  );
};

export default FormTitle;
