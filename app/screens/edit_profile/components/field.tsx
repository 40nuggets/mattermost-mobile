// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {useIntl} from 'react-intl';

import {HOLDERS} from '@screens/edit_profile/constants';

import InputField from './input_field';

type CommonFieldSettingsProps = {
    isDisabled: boolean;
    optional?: boolean;
    id: string;
    value: string;
    onChange: (id: string, value: string) => void;
    maxLength?: number;
}

const Field = ({isDisabled, id, value, onChange, optional, maxLength}: CommonFieldSettingsProps) => {
    const intl = useIntl();

    return (
        <InputField
            disabled={isDisabled}
            id={id}
            label={HOLDERS[id]}
            fieldDescription={intl.formatMessage({
                id: 'user.settings.general.field_handled_externally',
                defaultMessage: 'This field is handled through your login provider. If you want to change it, you need to do so through your login provider.',
            })}
            onChange={onChange}
            value={value}
            testID={`edit_profile.text_setting.${id}`}
            optional={optional}
            maxLength={maxLength}
        />
    );
};

export default Field;