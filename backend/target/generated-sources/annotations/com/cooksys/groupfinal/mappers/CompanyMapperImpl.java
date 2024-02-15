package com.cooksys.groupfinal.mappers;

import com.cooksys.groupfinal.dtos.CompanyDto;
import com.cooksys.groupfinal.entities.Company;
import java.util.HashSet;
import java.util.Set;
import javax.annotation.processing.Generated;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-01-04T15:11:33-0500",
    comments = "version: 1.4.1.Final, compiler: javac, environment: Java 17.0.3 (Eclipse Adoptium)"
)
@Component
public class CompanyMapperImpl implements CompanyMapper {

    @Autowired
    private TeamMapper teamMapper;
    @Autowired
    private BasicUserMapper basicUserMapper;

    @Override
    public CompanyDto entityToDto(Company company) {
        if ( company == null ) {
            return null;
        }

        CompanyDto companyDto = new CompanyDto();

        companyDto.setId( company.getId() );
        companyDto.setName( company.getName() );
        companyDto.setDescription( company.getDescription() );
        companyDto.setTeams( teamMapper.entitiesToDtos( company.getTeams() ) );
        companyDto.setEmployees( basicUserMapper.entitiesToBasicUserDtos( company.getEmployees() ) );

        return companyDto;
    }

    @Override
    public Set<CompanyDto> entitiesToDtos(Set<Company> companies) {
        if ( companies == null ) {
            return null;
        }

        Set<CompanyDto> set = new HashSet<CompanyDto>( Math.max( (int) ( companies.size() / .75f ) + 1, 16 ) );
        for ( Company company : companies ) {
            set.add( entityToDto( company ) );
        }

        return set;
    }
}
