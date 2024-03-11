import React, { FC, ReactNode } from "react";
import { Paper, Table, Text } from "@mantine/core";
import { IResponse } from "@/shared/types";
import { ResponseItem } from "@/components/form/ResponseItem";

type ResponsesProps = {
  responses: IResponse[];
};

export const Responses: FC<ResponsesProps> = ({ responses }) => {
  return (
    <Paper
      bg={"#F8F9FA"}
      radius={"md"}
      px={"0.5rem"}
      mt={"2.5rem"}
      py={"0.75rem"}
    >
      <Table
        striped
        stripedColor={"#E9ECEF"}
        withRowBorders={false}
        verticalSpacing={"0.75rem"}
        horizontalSpacing={"0.75rem"}
      >
        <Table.Thead>
          <Table.Tr>
            {Object.keys(responses?.at(0)?.data ?? {}).map((key) => (
              <Table.Th key={key}>
                <Text color={"#A6A7AB"} size={"0.75rem"}>
                  {key}
                </Text>
              </Table.Th>
            ))}
            <Table.Th pl={"1rem"}>
              <Text color={"#A6A7AB"} size={"0.75rem"}>
                Дата создания
              </Text>
            </Table.Th>
            <Table.Th />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {responses.map((response) => (
            <ResponseItem key={response.id} response={response} />
          ))}
        </Table.Tbody>
      </Table>
    </Paper>
  );
};