import React from "react";
import {
  Box,
  Center,
  Flex,
  Heading,
  IconButton,
  Separator,
  Table,
  Text,
} from "@chakra-ui/react";
import { FaEdit, FaTrash } from "react-icons/fa";

import { useBankContext } from "@/hooks/useBank";
import { formatToBRL } from "@/utils/formatToBRL";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import { Tooltip } from "@/components/ui/tooltip";

const Home: React.FC = () => {
  const { banks, page, pageSize, setPage } = useBankContext();

  return (
    <Box w="50%" m="auto">
      <Flex justifyContent="space-between" alignItems="center">
        <Heading as="h1" fontWeight={500}>
          Banks Manager
        </Heading>
        <FormModal />
      </Flex>
      <Separator m="1rem 0" />

      {banks && banks.result ? (
        <>
          <Box h="614px" mb="1rem">
            <Table.Root w="full" variant="outline">
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader>Banco</Table.ColumnHeader>
                  <Table.ColumnHeader>Conta</Table.ColumnHeader>
                  <Table.ColumnHeader>Agência</Table.ColumnHeader>
                  <Table.ColumnHeader>Saldo</Table.ColumnHeader>
                  <Table.ColumnHeader textAlign="end">Ações</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {banks.result.map((item) => (
                  <Table.Row key={item.id}>
                    <Table.Cell>{item.name}</Table.Cell>
                    <Table.Cell>{item.account}</Table.Cell>
                    <Table.Cell>{item.branch}</Table.Cell>
                    <Table.Cell>{formatToBRL(item.balance)}</Table.Cell>
                    <Table.Cell justifyContent="end" display="flex" gap="1rem">
                      <Tooltip content="Editar">
                        <IconButton background="yellow.500" size="xs">
                          <FaEdit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Excluir">
                        <IconButton background="red.500" size="xs">
                          <FaTrash color="white" />
                        </IconButton>
                      </Tooltip>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>
          </Box>
          <Pagination
            total={banks.pagination.totalElements}
            pageSize={pageSize}
            page={page}
            defaultPage={1}
            onPageChange={(page) => setPage(page.page)}
          />
        </>
      ) : (
        <Center>
          <Text>Nenhum banco cadastrado</Text>
        </Center>
      )}
    </Box>
  );
};

export default Home;
