import React, { useState } from "react";
import Router from "next/router";
import { Button, Card, Group, Stack, Text, TextInput } from "@mantine/core";
import { GlobalWrapper } from "@/components/global/GlobalWraper";
import { Sidebar } from "@/components/global/Sidebar";
import { ApplicationLayout } from "@/shared/ui-kit/layouts/ApplicationLayout";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title };

      await fetch(`/api/form`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      await Router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <GlobalWrapper sidebar={<Sidebar />}>
      <ApplicationLayout title="Создать форму">
        <Card radius="md" p="xl">
          <form onSubmit={submitData}>
            <Stack gap="xl">
              <TextInput
                autoFocus
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Введите название формы"
                type="text"
                value={title}
              />

              <Group>
                <Button disabled={!title} type="submit">
                  Создать
                </Button>
                <Button onClick={() => Router.push("/")} variant="subtle">
                  Отмена
                </Button>
              </Group>
            </Stack>
          </form>
        </Card>
      </ApplicationLayout>
    </GlobalWrapper>
  );
};

export default Draft;
