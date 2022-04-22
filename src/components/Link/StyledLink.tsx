import React from "react";
import Link from "next/link";
import { ReactNode } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";

export type TProps = {
  as?: string;
  children: ReactNode;
  className?: string;
  href: string;
  isActive?: boolean;
  savePathname: (data: string) => void;
};

const StyledLink = ({
  as,
  children,
  className,
  href,
  savePathname,
}: TProps) => {
  const router = useRouter();

  const handleClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    router.push(href);
    await savePathname(router.pathname || "");
  };

  return (
    <Link href={href} as={as} passHref>
      <div className="link-wrapper">
        <a className={className} onClick={handleClick}>
          {children}
        </a>
      </div>
    </Link>
  );
};

export default styled(StyledLink)<{ isActive?: boolean }>`
  text-decoration: none;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 20px;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  ${({ isActive }) => `color: ${isActive ? "#FF1E56" : "#fff"}`};

  &:hover {
    color: #40a9ff;
  }

  &:focus {
    color: #40a9ff;
    outline: none;
    border: 0;
  }
`;
