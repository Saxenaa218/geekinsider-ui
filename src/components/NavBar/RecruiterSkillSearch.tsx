import React from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useHistory, useLocation } from 'react-router';

import { fetchSkillSearch, SearchType, StateTypes, setSearchType } from '../../redux';
import { skills } from '../../utils';
import './Navbar.scss';

const { Option } = Select;

interface RecruiterSkillSearchPropTypes {
    fetchSkillSearch: (e: string[]) => void,
    setSearchType: (e: SearchType) => void
}

const RecruiterSkillSearch: React.FC<RecruiterSkillSearchPropTypes> = (props) => {
    const { fetchSkillSearch, setSearchType } = props;
    const history = useHistory();
    const location = useLocation();

    const handleChange = (values: string[]) => {
        if (location?.pathname !== '/search') history.push('/search');
        if (values.length) {
            fetchSkillSearch(values);
            setSearchType('skillSearch');
        }
        else {
            setSearchType('recommended');
        }
    }

    const handleClear = () => {
        setSearchType('recommended');
    }

    const handleClick = () => {
        history.push('/search');
    }

    return (
        <Select 
            mode="multiple"
            placeholder="Search jobs via skills"
            style={{ width: '50%' }} 
            onChange={handleChange}
            onClick={handleClick}
            allowClear
            dropdownMatchSelectWidth={false}
            onClear={handleClear}
        >
            {skills.map((itm: string) => <Option value={itm} key={itm}>{itm}</Option>)}
        </Select>
    )
}

const mapStateToProps = (state: StateTypes) => ({
    skillSearch: state.skillSearch,
});
  
const mapDispatchToProps = (dispatch: any) => bindActionCreators({ 
    fetchSkillSearch,
    setSearchType
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(RecruiterSkillSearch);
