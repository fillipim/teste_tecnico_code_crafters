import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/ui/pagination";
import { HStack } from "@chakra-ui/react";

export interface PaginationProps {
  total: number;
  pageSize: number;
  defaultPage: number;
  page: number;
  onPageChange: (page: { page: number }) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  total,
  pageSize,
  defaultPage = 1,
  page = 1,
  onPageChange,
}) => {
  return (
    <PaginationRoot
      page={page}
      count={total}
      onPageChange={onPageChange}
      defaultPage={defaultPage}
      pageSize={pageSize}
      variant="solid"
    >
      <HStack>
        <PaginationPrevTrigger />
        <PaginationItems />
        <PaginationNextTrigger />
      </HStack>
    </PaginationRoot>
  );
};

export default Pagination;
